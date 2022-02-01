import { DEFAULT_TESTNET_SERVER } from '@shared/constants';

export { setupMocks } from './playwright-mocks';
import { Wallet } from '@stacks/wallet-sdk';

export const SECRET_KEY =
  'invite helmet save lion indicate chuckle world pride afford hard broom draft';

export const HEYSTACK_HEY_TX_REQUEST =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJzdHhBZGRyZXNzIjoiU1QyUEhDUEFOVlQ4RFZQU1k1VzJaWjgxTTI4NVE1WjhZNkRRTVpFN1oiLCJjb250cmFjdEFkZHJlc3MiOiJTVDIxRlRDODJDQ0tFMFlIOVNLNVNKMUQ0WEVNUkEwNjlGS1YwVko4TiIsImNvbnRyYWN0TmFtZSI6ImhleS1maW5hbCIsImZ1bmN0aW9uTmFtZSI6InNlbmQtbWVzc2FnZSIsInBvc3RDb25kaXRpb25zIjpbIjAxMDIxYWFkMTY1OTU1ZGU5MGRkZGIzZTJmMDVmZmEwMzQxMjBiNzJmZDFlMzMxYTgyZmQzMTAyNjMyNmUwN2EyOWNjY2I5OTA1YTRlYmE5ODUwMGM5N2MwOTY4NjU3OTJkNzQ2ZjZiNjU2ZTA5Njg2NTc5MmQ3NDZmNmI2NTZlMDEwMDAwMDAwMDAwMDAwMDAxIl0sIm5ldHdvcmsiOnsidmVyc2lvbiI6MTI4LCJjaGFpbklkIjoyMTQ3NDgzNjQ4LCJjb3JlQXBpVXJsIjoiaHR0cHM6Ly9zdGFja3Mtbm9kZS1hcGkudGVzdG5ldC5zdGFja3MuY28iLCJibnNMb29rdXBVcmwiOiJodHRwczovL3N0YWNrcy1ub2RlLWFwaS5tYWlubmV0LnN0YWNrcy5jbyIsImJyb2FkY2FzdEVuZHBvaW50IjoiL3YyL3RyYW5zYWN0aW9ucyIsInRyYW5zZmVyRmVlRXN0aW1hdGVFbmRwb2ludCI6Ii92Mi9mZWVzL3RyYW5zZmVyIiwiYWNjb3VudEVuZHBvaW50IjoiL3YyL2FjY291bnRzIiwiY29udHJhY3RBYmlFbmRwb2ludCI6Ii92Mi9jb250cmFjdHMvaW50ZXJmYWNlIiwicmVhZE9ubHlGdW5jdGlvbkNhbGxFbmRwb2ludCI6Ii92Mi9jb250cmFjdHMvY2FsbC1yZWFkIn0sImZ1bmN0aW9uQXJncyI6WyIwZTAwMDAwMDE1Njg2NTc5MjA2NjcyNmY2ZDIwNzQ2ODY1MjA3NDY1NzM3NDIwNjE3MDcwIiwiMGEwZTAwMDAwMDdlNjg3NDc0NzA3MzNhMmYyZjZkNjU2NDY5NjEzMTJlNjc2OTcwNjg3OTJlNjM2ZjZkMmY2ZDY1NjQ2OTYxMmY0MTUzNjQzMDU1NmI2YTMwNzkzMzcxNGQ0ZDJmNjc2OTcwNjg3OTJlNjc2OTY2M2Y2MzY5NjQzZDMyMzkzODM1NjQ2NTYyNjIzMDc4MzQzMzZkMzQ3NjM0NjE3YTc3NjM3NTM5NzE2NzM0NmY2NjY0NjQ3OTc5MzA2OTY0NjI2YTZkNjk2ZDczN2E2ZjM2MzIzODMxNjc2YTI2NzI2OTY0M2Q2NzY5NzA2ODc5MmU2NzY5NjYyNjYzNzQzZDY3Il0sInR4VHlwZSI6ImNvbnRyYWN0X2NhbGwiLCJwdWJsaWNLZXkiOiIwMzFhNWQ1ZmIzNjQ1Yzc2YzUwODNlM2E0ZmI5YTU5YjVmZWQzMDljODcxOTc4NDcxZDY0NDhjOGFkZTg2MzgwZTgiLCJhcHBEZXRhaWxzIjp7Im5hbWUiOiJIZXlzdGFjayIsImljb24iOiIvaWNvbi5wbmcifX0.ik9kZfTDIfgaCDi6MgGwcWMB7Gi7PbY2q8lMupzxIJ0FqLA6uLBy0n2BjQDqN6dHM5M6a_RKvnM8R-RON60QsA';

export const HEYSTACK_HEY_TX_REQUEST_DECODED = {
  stxAddress: 'ST2PHCPANVT8DVPSY5W2ZZ81M285Q5Z8Y6DQMZE7Z',
  contractAddress: 'ST21FTC82CCKE0YH9SK5SJ1D4XEMRA069FKV0VJ8N',
  contractName: 'hey-final',
  functionName: 'send-message',
  postConditions: [
    '01021aad165955de90dddb3e2f05ffa034120b72fd1e331a82fd31026326e07a29cccb9905a4eba98500c97c096865792d746f6b656e096865792d746f6b656e010000000000000001',
  ],
  network: {
    version: 128,
    chainId: 2147483648,
    coreApiUrl: DEFAULT_TESTNET_SERVER,
    bnsLookupUrl: 'https://stacks-node-api.mainnet.stacks.co',
    broadcastEndpoint: '/v2/transactions',
    transferFeeEstimateEndpoint: '/v2/fees/transfer',
    accountEndpoint: '/v2/accounts',
    contractAbiEndpoint: '/v2/contracts/interface',
    readOnlyFunctionCallEndpoint: '/v2/contracts/call-read',
  },
  functionArgs: [
    '0e000000156865792066726f6d20746865207465737420617070',
    '0a0e0000007e68747470733a2f2f6d65646961312e67697068792e636f6d2f6d656469612f41536430556b6a307933714d4d2f67697068792e6769663f6369643d3239383564656262307834336d347634617a776375397167346f6664647979306964626a6d696d737a6f36323831676a267269643d67697068792e6769662663743d67',
  ],
  txType: 'contract_call',
  publicKey: '031a5d5fb3645c76c5083e3a4fb9a59b5fed309c871978471d6448c8ade86380e8',
  appDetails: {
    name: 'Heystack',
    icon: '/icon.png',
  },
};

export const STX_TRANSFER_TX_REQUEST =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJzdHhBZGRyZXNzIjoiU1QzNVozWVFDVEMxV1o4WjdBS0hHRTkxSEswNVdLTUtQVE4xS1g3UTciLCJuZXR3b3JrIjp7InZlcnNpb24iOjEyOCwiY2hhaW5JZCI6MjE0NzQ4MzY0OCwiY29yZUFwaVVybCI6Imh0dHBzOi8vc3RhY2tzLW5vZGUtYXBpLnhlbm9uLmJsb2Nrc3RhY2sub3JnIiwiYm5zTG9va3VwVXJsIjoiaHR0cHM6Ly9jb3JlLmJsb2Nrc3RhY2sub3JnIiwiYnJvYWRjYXN0RW5kcG9pbnQiOiIvdjIvdHJhbnNhY3Rpb25zIiwidHJhbnNmZXJGZWVFc3RpbWF0ZUVuZHBvaW50IjoiL3YyL2ZlZXMvdHJhbnNmZXIiLCJhY2NvdW50RW5kcG9pbnQiOiIvdjIvYWNjb3VudHMiLCJjb250cmFjdEFiaUVuZHBvaW50IjoiL3YyL2NvbnRyYWN0cy9pbnRlcmZhY2UiLCJyZWFkT25seUZ1bmN0aW9uQ2FsbEVuZHBvaW50IjoiL3YyL2NvbnRyYWN0cy9jYWxsLXJlYWQifSwiYXV0aE9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsIm1lbW8iOiJGcm9tIGRlbW8gYXBwIiwicmVjaXBpZW50IjoiU1RCNDRIWVBZQVQyQkIyUUU1MTNOU1A4MUhUTVlXQkpQMDJIUEdLNiIsImFtb3VudCI6IjEwMiIsInB1YmxpY0tleSI6IjAyYzY3ZTZlZWMzYzY2MzY4MDU3MzIwZTYzMWNmZjAzZjFmMzY5MjI4ZDI0Mzc5ZjM1OGEwYWU4ZmY5NDJlNGVmZiIsInR4VHlwZSI6InRva2VuX3RyYW5zZmVyIiwiYXBwRGV0YWlscyI6eyJuYW1lIjoiVGVzdGluZyBBcHAiLCJpY29uIjoiL2Fzc2V0cy9tZXNzZW5nZXItYXBwLWljb24ucG5nIn19.SQm6Pg_ny1J0o9iReIfY2D9jkYUvaER-lmHe2Jxc8opfASH8bplRN1FlI8SQ4dOLO0rfvjvIaCV4qbPAylnNSA';

// ts-unused-exports:disable-next-line
export const STX_TRANSFER_DECODED = {
  stxAddress: 'ST35Z3YQCTC1WZ8Z7AKHGE91HK05WKMKPTN1KX7Q7',
  network: {
    version: 128,
    chainId: 2147483648,
    coreApiUrl: 'https://stacks-node-api.xenon.blockstack.org',
    bnsLookupUrl: 'https://core.blockstack.org',
    broadcastEndpoint: '/v2/transactions',
    transferFeeEstimateEndpoint: '/v2/fees/transfer',
    accountEndpoint: '/v2/accounts',
    contractAbiEndpoint: '/v2/contracts/interface',
    readOnlyFunctionCallEndpoint: '/v2/contracts/call-read',
  },
  authOrigin: 'http://localhost:8080',
  memo: 'From demo app',
  recipient: 'STB44HYPYAT2BB2QE513NSP81HTMYWBJP02HPGK6',
  amount: '102',
  publicKey: '02c67e6eec3c66368057320e631cff03f1f369228d24379f358a0ae8ff942e4eff',
  txType: 'token_transfer',
  appDetails: { name: 'Testing App', icon: '/assets/messenger-app-icon.png' },
} as const;

export const TEST_WALLET: Wallet = {
  salt: 'e95b8fed404c4130267b15be0df5aecb7c118f1297bf25d096e2bf442ec7b1a7',
  rootKey:
    'xprv9s21ZrQH143K2bCXs73Bt3sfzEXzMCgRgtmDJ7R7K6cMgMFq95EvBM8DWTd7bSZthijgPrzxStburCzvQ6dxA2mmpPKGTxCi9peyPyMeJ3B',
  configPrivateKey: '3b6d03391916e05f549eb08d47f931b7c368ec4fda37d2150f160af1a8671a41',
  encryptedSecretKey:
    '5ed9074b9b35be315e4191f06354ebc91b103b662fca3623c8d99cd960d9c070d437f29329112db63de32c970c9bd2ed02afaee55b32d1dce063b1db7aa178b39b230cf5b1ec4245495f89a69a27237c',
  accounts: [
    {
      stxPrivateKey: 'cc440106121617d5ea23646552aa40a62316878293a1baa7a02fbb071b8cbe2901',
      dataPrivateKey: '504b91ea465bb9f6c28a38432869bd04dbeb85b46525bcf5e9615a9ddfcc178c',
      appsKey:
        'xprvA2KzZmgR2PMM55CgbWxRC6K74n4ANrBitjxKnKmEJYLq4tfQX5p17NpUx9gvk4fnnJDym14E1hixmDzjfbt4Fmf73g1RcvQZpMzih81Lg1S',
      salt: 'e95b8fed404c4130267b15be0df5aecb7c118f1297bf25d096e2bf442ec7b1a7',
      index: 0,
    },
    {
      stxPrivateKey: '1499c9194feed4cbca3bd9f7a2b3413684d30c1a9d8a7f044398f9e27ae5d00301',
      dataPrivateKey: 'f96a1e65ce95db1ee6ff2e53988d4a3524c433548758d95354ea05fc24cc4505',
      appsKey:
        'xprvA1eQc5DGP8KU275yPdXUbWXPW4Ba2h2poSpXnV5jxxfpPghuaP4p8R1YHg8MsmqGpwFQU4R74cU5x8E7dExQN14cvPHn6c1vxajxWjQxTpM',
      salt: 'e95b8fed404c4130267b15be0df5aecb7c118f1297bf25d096e2bf442ec7b1a7',
      index: 1,
    },
    {
      stxPrivateKey: 'b8e5b2c33be621fb16a5260b30d526cadc7087d58736f2f3c6f84d31be452b6601',
      dataPrivateKey: 'bdcc48a4b8c098a7cb06e7221ee0b784c05083353dad964674a4eebfaa104f0d',
      appsKey:
        'xprvA1vvF4rkEyBDLuvQKTa9YvCNKHcTNsrBwD5imsnnatG9RiyF5634o2GBwb5YvjC237LK6k273xRmaiCsNKpbS2EXUGPTtWo3CBFKRmzEHti',
      salt: 'e95b8fed404c4130267b15be0df5aecb7c118f1297bf25d096e2bf442ec7b1a7',
      index: 2,
    },
    {
      stxPrivateKey: 'da62811e06fe6fb394982a740fdcab6f1194ed85c5f6421021777638512d41ee01',
      dataPrivateKey: '522a6fb27d2255c30ab7d83ffc3b43cda4627c505619f0bb1e7de66c297bc53c',
      appsKey:
        'xprvA23n53oLHrMsQcVULk6UBg3PJUWHC3L6W8DmKqzGEVprqjSF1qs8hcZfP3H1zg1asSUDDZBXNw81p5BBALZorQz2fKNeWGfwmRhUsbMiVsH',
      salt: 'e95b8fed404c4130267b15be0df5aecb7c118f1297bf25d096e2bf442ec7b1a7',
      index: 3,
    },
  ],
};

export const TEST_ACCOUNTS_WITH_ADDRESS = [
  {
    stxPrivateKey: 'cc440106121617d5ea23646552aa40a62316878293a1baa7a02fbb071b8cbe2901',
    dataPrivateKey: '504b91ea465bb9f6c28a38432869bd04dbeb85b46525bcf5e9615a9ddfcc178c',
    appsKey:
      'xprvA2KzZmgR2PMM55CgbWxRC6K74n4ANrBitjxKnKmEJYLq4tfQX5p17NpUx9gvk4fnnJDym14E1hixmDzjfbt4Fmf73g1RcvQZpMzih81Lg1S',
    salt: 'e95b8fed404c4130267b15be0df5aecb7c118f1297bf25d096e2bf442ec7b1a7',
    index: 0,
    address: 'SP5ZJW9Z6JJ2N86A168AR1M7CVCGZRWZSW6SEM6H',
  },
  {
    stxPrivateKey: '1499c9194feed4cbca3bd9f7a2b3413684d30c1a9d8a7f044398f9e27ae5d00301',
    dataPrivateKey: 'f96a1e65ce95db1ee6ff2e53988d4a3524c433548758d95354ea05fc24cc4505',
    appsKey:
      'xprvA1eQc5DGP8KU275yPdXUbWXPW4Ba2h2poSpXnV5jxxfpPghuaP4p8R1YHg8MsmqGpwFQU4R74cU5x8E7dExQN14cvPHn6c1vxajxWjQxTpM',
    salt: 'e95b8fed404c4130267b15be0df5aecb7c118f1297bf25d096e2bf442ec7b1a7',
    index: 1,
    address: 'SP2PHCPANVT8DVPSY5W2ZZ81M285Q5Z8Y6FQ2ZH9D',
  },
  {
    stxPrivateKey: 'b8e5b2c33be621fb16a5260b30d526cadc7087d58736f2f3c6f84d31be452b6601',
    dataPrivateKey: 'bdcc48a4b8c098a7cb06e7221ee0b784c05083353dad964674a4eebfaa104f0d',
    appsKey:
      'xprvA1vvF4rkEyBDLuvQKTa9YvCNKHcTNsrBwD5imsnnatG9RiyF5634o2GBwb5YvjC237LK6k273xRmaiCsNKpbS2EXUGPTtWo3CBFKRmzEHti',
    salt: 'e95b8fed404c4130267b15be0df5aecb7c118f1297bf25d096e2bf442ec7b1a7',
    index: 2,
    address: 'SP35Z3YQCTC1WZ8Z7AKHGE91HK05WKMKPTMATGQYP',
  },
  {
    stxPrivateKey: 'da62811e06fe6fb394982a740fdcab6f1194ed85c5f6421021777638512d41ee01',
    dataPrivateKey: '522a6fb27d2255c30ab7d83ffc3b43cda4627c505619f0bb1e7de66c297bc53c',
    appsKey:
      'xprvA23n53oLHrMsQcVULk6UBg3PJUWHC3L6W8DmKqzGEVprqjSF1qs8hcZfP3H1zg1asSUDDZBXNw81p5BBALZorQz2fKNeWGfwmRhUsbMiVsH',
    salt: 'e95b8fed404c4130267b15be0df5aecb7c118f1297bf25d096e2bf442ec7b1a7',
    index: 3,
    address: 'SP23C2PBK6PVQEW2M17JSB6S2K0VZ611PPJ0D20NH',
  },
];
export const SECRET_KEY_2 =
  'derive plug aerobic cook until crucial school fine cushion panda ready crew photo typical nuclear ride steel indicate cupboard potato ignore bamboo script galaxy';

export const MAGIC_RECOVERY_KEY = 'KDR6O8gKXGmstxj4d2oQqCi806M/Cmrbiatc6g7MkQQLVreRA95IoPtvrI3N230jTTGb2XWT5joRFKPfY/2YlmRz1brxoaDJCNS4z18Iw5Y=';

export const MAGIC_RECOVERY_PASSWORD = 'test202020';
