import type { Todo } from '@/types/Todo';

const ActionType = {
  added: 'todo/added',
  removed: 'todo/removed',
  updated: 'todo/updated',
} as const;

export type TodoAction = ReturnType<typeof add | typeof remove | typeof update>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const add = (text: string, status: 'active' | 'completed') => ({
  type: ActionType.added,
  payload: { text, status },
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const remove = (id: number) => ({
  type: ActionType.removed,
  payload: { id },
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const update = (todo: Todo) => ({
  type: ActionType.updated,
  payload: todo,
});
