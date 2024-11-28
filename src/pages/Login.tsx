"use client"; 

import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { Input, InputType } from '../components/Input';
import { Button } from '@/components/Button';
import { useState } from 'react';
import { ToastMessage } from '@/components/ToastMessage';

const loginSchema = z.object({
  email: z.string().email('Invalid email format.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

type LoginForm = z.infer<typeof loginSchema>;

const mockUsers = [
  { email: 'user1@mail.com', password: '123456' },
  { email: 'user2@mail.com', password: '456123' },
  { email: 'user3@mail.com', password: '789987' },
];

export default function Login() {
  const [isFieldFocused, setIsFieldFocused] = useState({
    email: false,
    password: false,
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    const userExists = mockUsers.find(
      (user) => user.email === data.email
    );

    if (!userExists) {
      toast(<ToastMessage title='Email nao cadastrado' description='Seu email informado nao foi cadastrado em nosso sistema.' />);
    } else if (userExists && userExists.password === data.password) {
      toast.success('Login successful!');
    } else {
      toast(<ToastMessage title='Invalid email or password.' description='' />);
    }
  };

  const onError = () => {
    const { email, password } = getValues()
    if (email === '' || password === '') {
      toast(<ToastMessage title='Campo não preenchido.' description='É necessário preencher todos os campos para continuar' />);
    }
  };

  const getInputType = (isActive: boolean, errorMessage?: string): InputType => {
    if (isActive) {
      return 'active';
    } else {
      if (errorMessage) {
        return 'error';
      }
    }
    return 'default';
  }

  return (
    <div className="flex items-center justify-center xl:items-start xl:justify-start h-screen w-full pt-4 2xl:pt-[236px] sm:pl-4 xl:pl-[50px] 2xl:pl-[296px] bg-cover bg-center bg-[url('/assets/Background.svg')] overflow-x-hidden">
      <form 
        onSubmit={handleSubmit(onSubmit, onError)}
        className=' w-[330px] sm:w-[512px] flex flex-col items-center 2xl:justify-start gap-1 sm:gap-8 py-2 px-3 2xl:py-4 2xl:px-6'>
        <img src="/assets/pix-now.svg" alt="logo escrita pix now" className='2xl:w-[231px]' />
        <div className='w-full flex flex-col items-center justify-center 2xl:justify-start gap-4'>
          <div className='flex flex-col gap-2'>
            <Heading color='text-gray-100' fontSize={window.innerWidth <= 640 ? 'mobile' : 'desktop'} fontWheight="font-bold">
              Welcome to pix now!
            </Heading>
            <Heading  color="text-white-200" fontSize="subtitle" fontWheight="font-normal">
              Best payment method for your Brazilian customers.
            </Heading>
          </div>

          <div className='flex flex-col items-center justify-center 2xl:justify-start gap-8'>
            <div className='flex flex-col justify-center 2xl:justify-start items-end'>
              <div className='flex flex-col items-center justify-center 2xl:justify-start mb-2'>
                <div className='flex flex-col gap-1'>
                  <Input 
                    {...register('email')}
                    label="Enter your e-mail"
                    inputSize={window.innerWidth <= 640 ? 'mobile' : 'desktop'}
                    placeholder="Escreva seu e-mail"
                    type="email"
                    onFocus={() => setIsFieldFocused((prev) => ({ ...prev, email: true }))}
                    onBlur={() => setIsFieldFocused((prev) => ({ ...prev, email: false }))}
                    inputType={getInputType(isFieldFocused.email, errors.password?.message)}
                    errorMessage={errors.email !== undefined ? errors.email.message : undefined}
                  />
                </div>
                
                <div>
                  <Input 
                    {...register('password')}
                    label="Enter your password"
                    inputSize={window.innerWidth <= 640 ? 'mobile' : 'desktop'}
                    placeholder="Escreva seu e-mail"
                    type="password"
                    onFocus={() => setIsFieldFocused((prev) => ({ ...prev, password: true }))}
                    onBlur={() => setIsFieldFocused((prev) => ({ ...prev, password: false }))}
                    inputType={getInputType(isFieldFocused.password, errors.password?.message)}
                    errorMessage={errors.password !== undefined ? errors.password.message : undefined}
                  />
                </div>
              </div>
              <Text className='cursor-pointer' color="text-gray-200" fontSize="text-sm" fontWheight="font-semibold">
                Forgot Password?
              </Text>
            </div>

            <div className='flex flex-col gap-4'>
              <Button
                buttonType="default"
                size={window.innerWidth <= 640 ? 'mobile' : 'desktop'}
              >
                Login
              </Button>
              <Button
              buttonType="outline"
              size={window.innerWidth <= 640 ? 'mobile' : 'desktop'}
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

