import { Trans } from '@lingui/macro';
import { Button, Flex, Heading, Text } from '@theme-ui/components';

import { ServiceWorkerToast } from './ServiceWorkerToast';

interface RefreshToastProps {
  dismiss: () => void;
  lastUpdate: string;
  reloadAndDismiss: () => void;
}
export const RefreshToast = ({
  dismiss,
  lastUpdate,
  reloadAndDismiss,
}: RefreshToastProps) => (
  <ServiceWorkerToast>
    <Heading>
      <Trans id="webworker.refresh-toast.heading">
        New content available, click on reload button to update.
      </Trans>
    </Heading>
    <Text>
      <Trans id="webworker.refresh-toast.last-update">
        Last update on: {lastUpdate}
      </Trans>
    </Text>
    <Flex>
      <Button onClick={dismiss}>
        <Trans id="webworker.toast.dismiss">Dismiss</Trans>
      </Button>
      <Button onClick={reloadAndDismiss}>
        <Trans id="webworker.refresh-toast.reload">Reload</Trans>
      </Button>
    </Flex>
  </ServiceWorkerToast>
);
