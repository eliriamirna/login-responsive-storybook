import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';
import { ColorOptions, Text } from './Text';

export type InputType = 'default' | 'error' | 'success' | 'active';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputType?: InputType;
  inputSize?: 'desktop' | 'mobile';
  errorMessage?: string;
  placeholder?: string
}

export function Input({
  label,
  inputType,
  errorMessage,
  inputSize = 'desktop',
  ...rest
}: InputProps) {
  console.log(label, inputType)

  function getComponentColor(): ColorOptions {
    let labelColor: ColorOptions = "text-white-200"

    if (inputType === 'error') {
      labelColor = "text-red-500"
    }
    if (inputType === 'success') {
      labelColor = "text-green-500"
    } 
    if (inputType === 'active') {
      labelColor = "text-yellow-300"
    } 
    return labelColor;
  }

  return (
    <div>
      {label && (
        <Text  color={getComponentColor()} fontSize="text-xs" fontWheight="font-normal">
          {label}
        </Text>
      )}
      <input
        {...rest}
            className={clsx('px-8 flex justify-center items-start h-14 bg-gray-100 bg-opacity-20 rounded-lg text-white-300 placeholder:text-gray-200 outline-none focus:ring-1',
          {
            'ring-yellow-300': inputType === 'active', 
            'ring-red-500': inputType === 'error',
            'ring-green-500': inputType === 'success',
          },
          {
            'w-[464px]': inputSize === 'desktop',
            'w-[330px]': inputSize === 'mobile',
          }
        )}
      >
      </input>
      {errorMessage && <span className={getComponentColor()}>{errorMessage}</span>}
    </div>
  );
}
