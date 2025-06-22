import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}

export default function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const baseClass = 'px-4 py-2 rounded font-semibold focus:outline-none ';
  
  const variantClass = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button
      className={baseClass + variantClass[variant]}
      {...props}
    >
      {children}
    </button>
  );
}
