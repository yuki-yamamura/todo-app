import type { TodoAction } from './action';
import type { Todo } from '@/types/Todo';

export const initialState: Todo[] = [];
type State = typeof initialState;

export const reducer = (state: State, action: TodoAction): State => {
  switch (action.type) {
    case 'todo/added': {
      const id =
        state
          .map((todo) => todo.id)
          .reduce((max, current) => Math.max(max, current), 0) + 1;

      return [
        ...state,
        { id, text: action.payload.text, status: action.payload.status },
      ];
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
