'use client';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addTodo,
  deleteTodo,
  setFilter,
  toggleComplete,
} from '@/redux/featuries/todolistSlice';
import { Input } from '@/components/base/Input';
import { Button } from '@/components/base/Button';
import { FilterValuesType } from '@/types';
const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todolist.todos);
  const filter = useAppSelector((state) => state.todolist.filter);
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim()) {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  const handleToggleComplete = (id: string) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleFilterChange = (filter: FilterValuesType) => {
    dispatch(setFilter(filter));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  });

  const renderFilterButton = (buttonFilter: FilterValuesType, textButton: string) => {
    return (
      <Button
        variant={filter === buttonFilter ? 'contained' : 'outlined'}
        onClick={() => handleFilterChange(buttonFilter)}
      >
        {textButton}
      </Button>
    );
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-full'>
        <Input
          type='text'
          value={inputText}
          onChange={handleInputChange}
          placeholder='Enter your task'
        />
        <Button onClick={handleAddTodo}>Add task</Button>
      </div>
      <div className='flex justify-center pt-2.5'>
        {renderFilterButton('all', 'All')}
        {renderFilterButton('active', 'Active')}
        {renderFilterButton('completed', 'Completed')}
      </div>
      <ul className='w-full space-y-2 pt-2.5'>
        {todos.length > 0 ? (
          filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center rounded-md px-4 py-2 ${
                todo.completed
                  ? 'bg-orange-100'
                  : 'bg-primary-light text-black dark:bg-primary-dark dark:text-white'
              } ${
                todo.completed
                  ? 'border border-orange-500 text-orange-500'
                  : 'border border-gray-500 text-gray-500'
              } text-lg`}
            >
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
                style={{ height: '1.5rem', width: '1.5rem' }}
                className='mr-2 h-6 w-6'
              />
              <span
                onClick={() => handleDeleteTodo(todo.id)}
                className={`${todo.completed ? 'line-through' : ''}`}
              >
                {todo.text}
              </span>
            </li>
          ))
        ) : (
          <li className='flex justify-center text-lg '>Please, create a new task.</li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
