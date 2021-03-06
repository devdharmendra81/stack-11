import { Suspense, memo } from 'react';
import { Box, BoxProps } from '@stacks/ui';

import { AccountWithAddress } from '@app/store/accounts/account.models';
import { AccountAvatar } from '@app/components/account-avatar/account-avatar';
import { getAccountDisplayName } from '@stacks/wallet-sdk';
import { useGetAccountNamesByAddressQuery } from '@app/query/bns/bns.hooks';

interface AccountAvatarProps extends BoxProps {
  account: AccountWithAddress;
}
const AccountAvatarSuspense = memo(({ account }: AccountAvatarProps) => {
  const name = useGetAccountNamesByAddressQuery(account.address);
  return <AccountAvatar name={name[0] ?? getAccountDisplayName(account)} account={account} />;
});

export const AccountAvatarItem = memo(({ account, ...rest }: AccountAvatarProps) => {
  const defaultName = getAccountDisplayName(account);
  return (
    <Box {...rest}>
      <Suspense fallback={<AccountAvatar name={defaultName} account={account} />}>
        <AccountAvatarSuspense account={account} />
      </Suspense>
    </Box>
  );
});
