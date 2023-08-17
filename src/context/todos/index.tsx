'use client';

import { add, remove, update } from './action';
import { reducer } from './reducer';
import { createContext, useContext, useMemo, useReducer } from 'react';

import type { Todo } from '@/types/Todo';

type TodosContextType = {
  todos: Todo[];
  addTodo: (...params: Parameters<typeof add>) => void;
  removeTodo: (...params: Parameters<typeof remove>) => void;
  updateTodo: (...params: Parameters<typeof update>) => void;
};

const TodosContext = createContext<TodosContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const TodosProvider = ({ children }: Props): JSX.Element => {
  const [todos, dispatch] = useReducer(reducer, []);
  const addTodo = (...params: Parameters<typeof add>) => {
    dispatch(add(...params));
  };
  const removeTodo = (...params: Parameters<typeof remove>) => {
    dispatch(remove(...params));
  };
  const updateTodo = (...params: Parameters<typeof update>) => {
    dispatch(update(...params));
  };
  const value = useMemo(
    () => ({
      addTodo,
      removeTodo,
      updateTodo,
      todos: todos.sort((a, b) => (a.id > b.id ? 1 : -1)),
    }),
    [todos],
  );

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodos = (): TodosContextType => {
  const contextValue = useContext(TodosContext);

  if (contextValue === null) {
    throw new Error('useTodos must be used within TodosProvider.');
  }

  return contextValue;
};
