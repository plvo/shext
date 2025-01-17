'use client';

import { ReloadIcon } from '@radix-ui/react-icons';
import { Button, buttonVariants } from '../components/ui/button';
import type { HTMLAttributes, MouseEventHandler } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export default function ButtonSubmit({
  onClick,
  label,
  disabled,
  loading,
  className,
  ...props
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: JSX.Element | string;
  disabled?: boolean;
  loading?: boolean;
  className?: HTMLAttributes<HTMLButtonElement>['className'];
} & ButtonProps) {
  return (
    <Button
      type="submit"
      variant={'default'}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn('w-full', className)}
      {...props}
    >
      {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
}
