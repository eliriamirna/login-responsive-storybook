import React from 'react';

export interface ToastMessageProps {
  title: string;
  description?: string;
}

export const ToastMessage = ({
  title, description
}: ToastMessageProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <img src="/assets/VectorX.svg" alt="ícone" className='w-12' />
      <div className='w-full flex flex-col gap-2'>
        <h1 className='text-gray-600 text-lg'>{title}</h1>
        {description && <span className='text-gray-150 text-sm'>{description}</span>}      
      </div>
    </div>
  );
};