'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { ReduxProvider } from '@/redux/reduxProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <ThemeProvider enableSystem={true} attribute='class'>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
