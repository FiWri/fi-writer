// disabling eslint since I can't solve the module import even with https://github.com/antfu/vite-plugin-pwa/issues/113 or https://github.com/antfu/vite-plugin-pwa/issues/210
import { toast } from 'react-hot-toast';
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/react';

import { OfflineReadyToast } from '../components/OfflineReadyToast';
import { RefreshToast } from '../components/RefreshToast';

const SW_UPDATE_INTERVAL = 20 * 1000; // interval in ms between webworker update checks

/**
 * Just call this hook to have the app display service worker prompts in the Toaster
 *
 * @export useServiceWorkerPrompt sets up the Toasts and service worker related logic
 */
export function useServiceWorkerPrompt() {
  // replaced dynamically
  const lastUpdate = '__LAST_UPDATE__';
  // replaced dyanmicaly
  const reloadSW = '__RELOAD_SW__';

  const { updateServiceWorker } = useRegisterSW({
    onNeedRefresh() {
      showRefreshToast(lastUpdate, updateServiceWorker);
    },
    onOfflineReady() {
      showOfflineReadyToast();
    },
    onRegistered(registration: ServiceWorkerRegistration | undefined) {
      // @ts-expect-error just ignore
      if (reloadSW === 'true') {
        registration &&
          setInterval(() => {
            console.log('Checking for sw update');
            registration.update();
          }, SW_UPDATE_INTERVAL /* 20s for testing purposes */);
      } else {
        console.log('SW Registered: ' + registration);
      }
    },
    onRegisterError(error: unknown) {
      // TODO: implement error management
      const message = `Error in WebWorker registration:\n ${error}`;
      console.error(message);
      toast.error(message);
    },
  });
}

const showOfflineReadyToast = () => {
  toast((t) => <OfflineReadyToast dismiss={() => toast.dismiss(t.id)} />, {
    duration: Infinity,
  });
};

const showRefreshToast = (
  lastUpdate: string,
  updateServiceWorker: (reloadPage?: boolean) => Promise<void>
) => {
  const reloadAndDismiss = (toastId: string) => {
    updateServiceWorker(true);
    toast.dismiss(toastId);
  };
  toast(
    (t) => (
      <RefreshToast
        dismiss={() => toast.dismiss(t.id)}
        lastUpdate={lastUpdate}
        reloadAndDismiss={() => reloadAndDismiss(t.id)}
      />
    ),
    { duration: Infinity }
  );
};
