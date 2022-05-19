// disabling eslint since I can't solve the module import even with https://github.com/antfu/vite-plugin-pwa/issues/113 or https://github.com/antfu/vite-plugin-pwa/issues/210
import { Button, Flex, Heading, Text } from '@theme-ui/components';
import { toast } from 'react-hot-toast';
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/react';

export function useServiceWorkerPrompt() {
  // replaced dynamically
  const buildDate = '__LAST_UPDATE__';
  // replaced dyanmicaly
  const reloadSW = '__RELOAD_SW__';

  const { updateServiceWorker } = useRegisterSW({
    onNeedRefresh() {
      console.log('Need refresh');
      showRefreshToast();
    },
    onOfflineReady() {
      console.log('Offline ready');
      showOfflineReadyToast();
    },
    onRegistered(r: ServiceWorkerRegistration | undefined) {
      // @ts-expect-error just ignore
      if (reloadSW === 'true') {
        r &&
          setInterval(() => {
            // eslint-disable-next-line no-console
            console.log('Checking for sw update');
            r.update();
          }, 20000 /* 20s for testing purposes */);
      } else {
        // eslint-disable-next-line prefer-template,no-console
        console.log('SW Registered: ' + r);
      }
    },
    onRegisterError(error: unknown) {
      // eslint-disable-next-line no-console
      console.log('SW registration error', error);
    },
  });

  const reloadAndDismiss = (toastId: string) => {
    updateServiceWorker(true);
    toast.dismiss(toastId);
  };

  const showOfflineReadyToast = () => {
    toast(
      (t) => (
        <Flex sx={{ flexDirection: 'column', minWidth: '20vw' }}>
          <Heading>App ready to work offline</Heading>
          <Button onClick={() => toast.dismiss(t.id)}>Dismiss</Button>
        </Flex>
      ),
      { duration: 9999999 }
    );
  };

  const showRefreshToast = () => {
    toast(
      (t) => (
        <Flex sx={{ flexDirection: 'column' }}>
          <Heading>
            New content available, click on reload button to update.
          </Heading>
          <Text>Last update on: {buildDate}</Text>
          <Flex>
            <Button onClick={() => toast.dismiss(t.id)}>Dismiss</Button>
            <Button onClick={() => reloadAndDismiss(t.id)}>Reload</Button>
          </Flex>
        </Flex>
      ),
      { duration: 9999999 }
    );
  };
}
