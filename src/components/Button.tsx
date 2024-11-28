import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  buttonType?: 'default' | 'outline';
  size?: 'desktop' | 'mobile'; 
  asChild?: boolean
}

export function Button({
  children,
  buttonType = 'default',
  size = 'desktop', 
  asChild,
  className,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      {...rest}
      className={clsx(
        className,
        'text-md',
        'font-semibold',
        {
          'flex justify-center items-center h-14 bg-yellow-100 rounded-lg text-gray-600 border-none hover:bg-yellow-400 focus:bg-yellow-400 transition duration-300 focus:ring-1 ring-gray-200':
            buttonType === 'default',
          'flex justify-center items-center h-14 bg-transparent rounded-lg border border-blue-400 text-white-500 hover:opacity-75 transition duration-300 focus:ring-1 ring-white-500':
            buttonType === 'outline',
        },
        {
          'w-[464px]': size === 'desktop',
          'w-[329px]': size === 'mobile',
        }
      )}
    >
      {children}
    </Comp>
  );
}
