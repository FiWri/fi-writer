import { Trans } from '@lingui/macro';
import { Button, Heading } from '@theme-ui/components';

import { ServiceWorkerToast } from './ServiceWorkerToast';

interface OfflineReadyToastProps {
  dismiss: () => void;
}
export const OfflineReadyToast = ({ dismiss }: OfflineReadyToastProps) => (
  <ServiceWorkerToast>
    <Heading>
      <Trans id="webworker.offline-toast.heading">
        App ready to work offline
      </Trans>
    </Heading>
    <Button onClick={dismiss}>
      <Trans id="webworker.toast.dismiss">Dismiss</Trans>
    </Button>
  </ServiceWorkerToast>
);
