import type { Todo } from '@/types/Todo';

const ActionType = {
  added: 'todo/added',
  removed: 'todo/removed',
  updated: 'todo/updated',
} as const;

export type TodoAction = ReturnType<typeof add | typeof remove | typeof update>;

export const add = (
  text: string,
  status: 'active' | 'completed',
): {
  type: typeof ActionType.added;
  payload: Pick<Todo, 'text' | 'status'>;
} => ({
  type: ActionType.added,
  payload: { text, status },
});

export const remove = (
  id: number,
): {
  type: typeof ActionType.removed;
  payload: Pick<Todo, 'id'>;
} => ({
  type: ActionType.removed,
  payload: { id },
});

export const update = (
  todo: Todo,
): {
  type: typeof ActionType.updated;
  payload: Todo;
} => ({
  type: ActionType.updated,
  payload: todo,
});
