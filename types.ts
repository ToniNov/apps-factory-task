export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type FilterValuesType = 'all' | 'active' | 'completed';

export interface TodolistState {
  todos: Todo[];
  filter: FilterValuesType;
}
