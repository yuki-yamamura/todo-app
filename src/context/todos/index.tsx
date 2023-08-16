'use client';

import { initialState, reducer } from './reducer';
import { createContext, useContext, useReducer } from 'react';

import type { TodoAction } from './action';
import type { Todo } from '@/types/Todo';

type TodoContextType = {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
};

const TodosContext = createContext<TodoContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const TodosProvider = ({ children }: Props) => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = (): TodoContextType => {
  const contextValue = useContext(TodosContext);

  if (contextValue === null) {
    throw new Error('useTodos must be used within TodosProvider.');
  }

  return {
    todos: contextValue.todos.sort((a, b) => (a.id < b.id ? 1 : 0)),
    dispatch: contextValue.dispatch,
  };
};
