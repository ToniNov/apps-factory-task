'use client';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'outlined' | 'contained';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  variant = 'contained',
  ...props
}) => {
  const outlineClasses =
    'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white';
  const containedClasses =
    'bg-orange-500 text-white shadow-sm hover:bg-orange-600 focus:outline-none ';
  const classes = variant === 'outlined' ? outlineClasses : containedClasses;

  return (
    <button
      className={`
        whitespace-nowrap rounded-md px-4 py-2 font-medium
        ${classes}
        ${className}
      `}
      onClick={onClick}
      {...props}
    />
  );
};
