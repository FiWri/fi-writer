import { Flex, FlexProps } from '@theme-ui/components';

export const ServiceWorkerToast = ({ children, ...props }: FlexProps) => (
  <Flex sx={{ flexDirection: 'column', padding: '1em' }} {...props}>
    {children}
  </Flex>
);
