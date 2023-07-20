import { configureStore } from '@reduxjs/toolkit';
import todolistReducer from '../redux/featuries/todolistSlice';
export const store = configureStore({
  reducer: {
    todolist: todolistReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
