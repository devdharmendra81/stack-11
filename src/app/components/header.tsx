import { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, BoxProps, color, Flex, FlexProps, IconButton, Stack } from '@stacks/ui';
import { FiMoreHorizontal as IconDots, FiArrowLeft as IconArrowLeft } from 'react-icons/fi';

import { HiroWalletLogo } from '@app/components/hiro-wallet-logo';
import { useDrawers } from '@app/common/hooks/use-drawers';
import { NetworkModeBadge } from '@app/components/network-mode-badge';
import { Caption, Title } from '@app/components/typography';
import { OnboardingSelectors } from '@tests/integration/onboarding.selectors';
import { RouteUrls } from '@shared/route-urls';

const MenuButton = memo((props: BoxProps) => {
  const { showSettings, setShowSettings } = useDrawers();
  return (
    <IconButton
      size="36px"
      iconSize="20px"
      onMouseUp={showSettings ? undefined : () => setShowSettings(true)}
      pointerEvents={showSettings ? 'none' : 'all'}
      color={color('text-caption')}
      _hover={{ color: color('text-title') }}
      data-testid="menu-button"
      icon={IconDots}
      {...props}
    />
  );
});

const HeaderTitle: React.FC<BoxProps> = props => (
  <Title fontSize="20px" lineHeight="28px" fontWeight={500} {...props} />
);

interface HeaderProps extends FlexProps {
  onClose?: () => void;
  hideActions?: boolean;
  title?: string;
}
export const Header: React.FC<HeaderProps> = memo(props => {
  const { onClose, title, hideActions, ...rest } = props;
  const navigate = useNavigate();

  const version = useMemo(() => {
    switch (process.env.WALLET_ENVIRONMENT) {
      case 'production':
      case 'preview':
        return `v${VERSION}`;
      case 'feature':
        return BRANCH;
      case 'development':
        return 'dev';
      default:
        return null;
    }
  }, []);

  return (
    <Flex
      p="loose"
      alignItems={hideActions ? 'center' : 'flex-start'}
      justifyContent="space-between"
      position="relative"
      {...rest}
    >
      {!title ? (
        <Stack alignItems="center" pt="7px" isInline>
          <HiroWalletLogo
            data-testid={OnboardingSelectors.HiroWalletLogoRouteToHome}
            onClick={() => navigate(RouteUrls.Home)}
          />
          {version ? (
            <Caption
              pt="extra-tight"
              mt="2px"
              color="#8D929A"
              variant="c3"
              marginRight="10px"
              fontFamily="mono"
            >
              {version}
            </Caption>
          ) : null}
        </Stack>
      ) : (
        <Box pt={onClose ? 'loose' : 'unset'} pr="tight">
          {onClose ? (
            <IconButton
              top="base-tight"
              position="absolute"
              left="base"
              onClick={onClose}
              icon={IconArrowLeft}
            />
          ) : null}
          <HeaderTitle>{title}</HeaderTitle>
        </Box>
      )}
      <Stack flexShrink={0} pt={hideActions ? '7px' : 0} alignItems="center" isInline>
        <NetworkModeBadge />
        {!hideActions && <MenuButton />}
      </Stack>
    </Flex>
  );
});
