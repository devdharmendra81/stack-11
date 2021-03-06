import { Button, Stack } from '@stacks/ui';

import { Body, Title } from '@app/components/typography';
import { Link } from '@app/components/link';
import { InitialPageSelectors } from '@tests/integration/initial-page.selectors';

interface WelcomeLayoutProps {
  isGeneratingWallet: boolean;
  onStartOnboarding(): void;
  onRestoreWallet(): void;
}
export function WelcomeLayout(props: WelcomeLayoutProps): JSX.Element {
  const { isGeneratingWallet, onStartOnboarding, onRestoreWallet } = props;

  return (
    <Stack spacing="extra-loose" flexGrow={1} justifyContent="center">
      <Stack width="100%" spacing="loose" textAlign="center" alignItems="center">
        <Title as="h1" fontWeight={500}>
          Hiro Wallet is installed
        </Title>
        <Body maxWidth="28ch">Are you new to Stacks or do you already have a Secret Key?</Body>
      </Stack>
      <Stack justifyContent="center" spacing="loose" textAlign="center">
        <Button
          onClick={onStartOnboarding}
          isLoading={isGeneratingWallet}
          data-testid={InitialPageSelectors.SignUp}
          borderRadius="10px"
        >
          I'm new to Stacks
        </Button>
        <Link onClick={onRestoreWallet} data-testid={InitialPageSelectors.SignIn}>
          Sign in with Secret Key
        </Link>
      </Stack>
    </Stack>
  );
}
