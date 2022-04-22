import { Trans } from '@lingui/macro';
import { useState } from 'react';
import { BoxProps, Button, Flex, Input } from 'theme-ui';

import { useTodo } from '~/features/demo-feature/hooks/useTodo';

const Layout = (props: BoxProps) => (
  <Flex
    {...props}
    variant="customBorderStyles.default"
    sx={{
      padding: '1em',
      margin: '1em',
    }}
  ></Flex>
);

export const CreateTodo = () => {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState('My todo');

  return (
    <Layout>
      <Input
        id="create-todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <Button onClick={() => addTodo(todo)}>
        <Trans id="demo-feature.create-button">Add task</Trans>
      </Button>
    </Layout>
  );
};
