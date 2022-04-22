import { atom, useAtom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from '../interfaces/Todo';

const todoListAtom = atom<Todo[]>([]);

export const useTodo = () => {
  const [todoList, setTodoList] = useAtom(todoListAtom);

  const addTodo = (todoValue: string) => {
    const todo = {
      id: uuidv4(),
      value: todoValue,
    };
    const todos = [...todoList, todo];

    setTodoList(todos);
  };

  const deleteTodo = (todoId: string) => {
    const newTodo = todoList.filter((todo) => todo.id !== todoId);
    setTodoList([...newTodo]);
  };

  return {
    todoList,
    addTodo,
    deleteTodo,
  };
};
