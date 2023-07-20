import TodoList from '@/components/Todolist';

export default function Home() {
  return (
    <main className='flex-1 bg-secondary-light px-4 py-8 dark:bg-secondary-dark dark:text-white'>
      <TodoList />
    </main>
  );
}
