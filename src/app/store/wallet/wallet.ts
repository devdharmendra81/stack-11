import { atom } from 'jotai';
import { Wallet, fetchWalletConfig, createWalletGaiaConfig } from '@stacks/wallet-sdk';
import { gaiaUrl } from '@shared/constants';

export const secretKeyState = atom<Uint8Array | undefined>(undefined);
export const hasSetPasswordState = atom<boolean>(false);
export const walletState = atom<Wallet | undefined>(undefined);
export const encryptedSecretKeyState = atom<string | undefined>(undefined);
export const walletConfigState = atom(async get => {
  const wallet = get(walletState);
  if (!wallet) return null;

  const gaiaHubConfig = await createWalletGaiaConfig({ wallet, gaiaHubUrl: gaiaUrl });
  return fetchWalletConfig({ wallet, gaiaHubConfig });
});
export const hasRehydratedVaultStore = atom(false);
