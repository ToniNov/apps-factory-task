import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { FilterValuesType, Todo, TodolistState } from '@/types';

const initialState: TodolistState = {
  todos: [],
  filter: 'all',
};

export const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<FilterValuesType>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, setFilter } = todolistSlice.actions;

export default todolistSlice.reducer;
