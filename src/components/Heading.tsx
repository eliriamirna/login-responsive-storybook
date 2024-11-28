import { clsx } from 'clsx'
import { ComponentProps, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface HeadingProps extends ComponentProps<'h2'> {
  children: ReactNode;
  fontSize?:  'mobile' | 'desktop' | 'subtitle';
  fontWheight?: 'font-bold' | 'font-normal';
  color?:
    'text-white-200' |
    'text-gray-100';
  asChild?: boolean;
}

export function Heading({
  children,
  fontSize,
  fontWheight,
  color,
  className,
  asChild,
  ...rest
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'
  return (
    <Comp
      {...rest}
      className={clsx(color, className, fontWheight,
        {
          'text-lg': fontSize === 'subtitle', 
          'text-xl': fontSize === 'mobile',
          'text-2xl': fontSize === 'desktop',
        },
        )}
    >
      {children}
    </Comp>
  )
}

