'use client';

import { ReloadIcon } from '@radix-ui/react-icons';
import { Button as DefaultButton, type ButtonProps } from '../components/ui/button';
import type { HTMLAttributes, MouseEventHandler } from 'react';
import { cn } from '../lib/_utils';
import { useCustomComponents } from 'src/hooks/_use-components';

export function ButtonSubmit({
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
  const buttonCustom = useCustomComponents('button');
  const Button = buttonCustom?.main || DefaultButton;

  return (
    <Button
      type="submit"
      variant={Button.defaultProps?.variant || 'default'}
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
