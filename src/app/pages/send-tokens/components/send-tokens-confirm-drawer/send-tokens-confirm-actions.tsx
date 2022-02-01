import { StacksTransaction } from '@stacks/transactions';
import { Button, Stack } from '@stacks/ui';

import { LoadingKeys, useLoading } from '@app/common/hooks/use-loading';
import { SendFormSelectors } from "@tests/page-objects/send-form.selectors";

interface SendTokensConfirmActionsProps {
  onUserConfirmBroadcast: () => void;
  transaction: StacksTransaction | undefined;
}

export function SendTokensConfirmActions(props: SendTokensConfirmActionsProps): JSX.Element {
  const { onUserConfirmBroadcast: handleSubmit, transaction } = props;
  const { isLoading } = useLoading(LoadingKeys.CONFIRM_DRAWER);

  return (
    <Stack spacing="base" width="100%">
      <Button
        borderRadius="12px"
        mode="primary"
        isDisabled={!transaction || isLoading}
        onClick={handleSubmit}
        isLoading={!transaction || isLoading}
        type="submit"
        data-testid={SendFormSelectors.SendToken}
      >
        Send
      </Button>
    </Stack>
  );
}
