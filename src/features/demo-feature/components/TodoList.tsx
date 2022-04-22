import { BoxProps, Flex } from 'theme-ui';

import { useTodo } from '../hooks/useTodo';
import { TodoItem } from './TodoList/TodoItem';

const Layout = (props: BoxProps) => (
  <Flex
    {...props}
    variant="customBorderStyles.default"
    sx={{
      flexDirection: 'column',
      padding: '1em',
      margin: '1em',
      minWidth: '25em',
    }}
  ></Flex>
);

export const TodoList = () => {
  const { todoList, deleteTodo } = useTodo();

  const todoItems = () =>
    todoList.map((todo) => (
      <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
    ));

  return <Layout>{todoItems()}</Layout>;
};
