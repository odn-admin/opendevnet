import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
}

export const Button = ({ title, size, variant, ...props }: ButtonProps) => {
  const sizeStyle =
    size === 'sm'
      ? 'px-2 py-1 text-xs'
      : size === 'lg'
      ? 'px-6 py-2.5'
      : 'px-5 py-2 text-sm';

  const variantStyle =
    variant === 'secondary'
      ? 'bg-secondary hover:bg-secondary-hover active:bg-secondary-active'
      : variant === 'danger'
      ? 'bg-danger hover:bg-danger-hover active:bg-danger-active'
      : variant === 'warning'
      ? 'bg-warning hover:bg-warning-hover active:bg-warning-active'
      : variant === 'success'
      ? 'bg-success hover:bg-success-hover active:bg-success-active'
      : 'bg-primary hover:bg-primary-hover active:bg-primary-active';

  return (
    <button
      className={`${sizeStyle} ${variantStyle} transition duration-200 rounded-sm text-text-button`}
      {...props}
    >
      {title}
    </button>
  );
};
