'use client';
import Link from 'next/link';
import logo from '../public/logo.png';
import DarkModeBtn from '@/components/base/LightDarkButton';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='bg-primary-light text-black dark:bg-primary-dark dark:text-white'>
      <nav className='container mx-auto px-4 py-2'>
        <ul className='flex items-center justify-between'>
          <li className='flex-shrink-1/2'>
            <Link href='https://appsfactory.ru'>
              <Image className='w-40' src={logo} alt='Image logo' />
            </Link>
          </li>
          <li className='mr-2 flex-shrink-0 sm:mr-2 sm:mr-36'>
            <Link href='/' className='text-lg font-bold'>
              Todolist App
            </Link>
          </li>
          <DarkModeBtn />
        </ul>
      </nav>
    </header>
  );
}
