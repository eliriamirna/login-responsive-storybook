import { clsx } from 'clsx'
import { ComponentProps, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export type ColorOptions = 'text-red-500' |
 'text-green-500' |
 'text-gray-100' |
 'text-white-200' |
 'text-white-300' |
 'text-white-400' |
 'text-gray-200' |
 'text-yellow-300';


export interface TextProps extends ComponentProps<'span'> {
  children: ReactNode;
  fontSize?: 'text-xs' | 'text-sm' | 'text-md';
  fontWheight?: 'font-semibold' | 'font-normal'
  color?: ColorOptions 
  asChild?: boolean;
}

export function Text({
  children,
  fontSize,
  fontWheight,
  color,
  className,
  asChild,
  ...rest
}: TextProps) {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      {...rest}
      className={clsx(color, className, fontSize, fontWheight)}
    >
      {children}
    </Comp>
  )
}

