'use client';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`
        w-full
        rounded-md border border-gray-300 bg-primary-light
        px-4 py-2 text-black shadow-sm focus:border-orange-500 focus:outline-none
        focus:ring-2 focus:ring-orange-500 dark:bg-primary-dark dark:text-white
        ${className}
      `}
      {...props}
    />
  );
};
