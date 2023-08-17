import type { TodoAction } from './action';
import type { Todo } from '@/types/Todo';

export const reducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'todo/added': {
      const id =
        state
          .map((todo) => todo.id)
          // TODO; make refactoring
          .reduce((max, current) => Math.max(max, current), 0) + 1;

      return [...state, { id, ...action.payload }];
    }
    case 'todo/removed': {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    case 'todo/updated': {
      return [
        ...state.filter((todo) => todo.id !== action.payload.id),
        action.payload,
      ];
    }
  }
};
