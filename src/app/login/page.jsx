'use client';

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, ingrese el email y la contraseña.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, ingrese un email válido.');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100'>
      <div className='w-full max-w-xs'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Login</h1>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Ingresa tu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              placeholder='Ingresa tu contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>

          {error && <p className='text-red-500 text-xs italic mb-4'>{error}</p>}

          <button
            type='submit'
            className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
