import { Button, Flex, Text } from 'theme-ui';

import { Todo } from '../../interfaces/Todo';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (todo: string) => void;
}

export const TodoItem = ({ todo, deleteTodo }: TodoItemProps) => (
  <Flex
    sx={{
      margin: '0.5em',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <Text margin="0.5em">{todo.value}</Text>
    <Button onClick={() => deleteTodo(todo.id)}> X </Button>
  </Flex>
);
