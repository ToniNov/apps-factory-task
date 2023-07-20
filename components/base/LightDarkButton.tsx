'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun } from '../../public/swg';
import { Moon } from '../../public/swg';

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <Sun
          className='h-6 w-6 cursor-pointer text-yellow-400'
          onClick={() => {
            setTheme('light');
          }}
        />
      ) : (
        <Moon
          className='h-6 w-6 cursor-pointer text-slate-700'
          onClick={() => {
            setTheme('dark');
          }}
        />
      )}
    </div>
  );
};
export default DarkModeBtn;
