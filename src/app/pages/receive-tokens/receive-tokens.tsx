import { useNavigate } from 'react-router-dom';
import { Box, Button, useClipboard, Stack, Text, color } from '@stacks/ui';
import { truncateMiddle } from '@stacks/ui-utils';
import { getAccountDisplayName } from '@stacks/wallet-sdk';

import { useRouteHeader } from '@app/common/hooks/use-route-header';
import { useWallet } from '@app/common/hooks/use-wallet';
import { useAnalytics } from '@app/common/hooks/analytics/use-analytics';
import { Header } from '@app/components/header';
import { Toast } from '@app/components/toast';
import { Caption, Title } from '@app/components/typography';
import { Tooltip } from '@app/components/tooltip';
import { RouteUrls } from '@shared/route-urls';

import { QrCode } from './components/address-qr-code';

export const ReceiveTokens = () => {
  const { currentAccount, currentAccountStxAddress } = useWallet();
  const navigate = useNavigate();
  const address = currentAccountStxAddress || '';
  const analytics = useAnalytics();
  const { onCopy, hasCopied } = useClipboard(address);

  useRouteHeader(<Header title="Receive" onClose={() => navigate(RouteUrls.Home)} />);

  const copyToClipboard = () => {
    void analytics.track('copy_address_to_clipboard');
    onCopy();
  };

  return (
    <Stack spacing="loose" textAlign="center">
      <Text
        textStyle="body.small"
        color={color('text-caption')}
        textAlign={['left', 'left', 'center']}
      >
        Share your unique address to receive any token or collectible. Including a memo is not
        required.
      </Text>
      <Toast show={hasCopied} />
      <Box mx="auto">
        <QrCode principal={address} />
      </Box>
      {currentAccount && (
        <Title fontSize={3} lineHeight="1rem">
          {getAccountDisplayName(currentAccount)}
        </Title>
      )}
      <Box>
        <Tooltip interactive placement="bottom" label={address}>
          <Caption userSelect="none">{truncateMiddle(address, 4)}</Caption>
        </Tooltip>
      </Box>
      <Button width="100%" onClick={copyToClipboard} borderRadius="10px">
        Copy your address
      </Button>
    </Stack>
  );
};
