export default function Footer() {
  return (
    <footer className='bg-primary-light py-4 py-4 text-black dark:bg-primary-dark dark:text-white'>
      <div className='container mx-auto px-4'>
        <p className='text-center'>&copy; {new Date().getFullYear()} Todolist App</p>
      </div>
    </footer>
  );
}
