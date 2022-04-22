import { Trans } from '@lingui/macro';
import { BoxProps, Flex, Heading } from 'theme-ui';

import { CreateTodo } from './components/CreateTodo';
import { TodoList } from './components/TodoList';

const DemoFeatureLayout = (props: BoxProps) => (
  <Flex
    {...props}
    sx={{
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}
  ></Flex>
);
export const DemoFeature = () => {
  return (
    <DemoFeatureLayout>
      <Heading as="h1">
        <Trans id="demo-feature.title">ToDo List</Trans>
      </Heading>
      <TodoList />
      <CreateTodo />
    </DemoFeatureLayout>
  );
};
