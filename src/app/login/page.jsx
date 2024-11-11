'use client';

import Link from 'next/link';
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
    <div
      className='flex items-center justify-center min-h-screen p-4'
      style={{ backgroundColor: '#DA291C' }}
    >
      <div className='w-full max-w-sm bg-white rounded-lg shadow-lg p-8'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-semibold mb-2'
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
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-semibold mb-2'
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
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          </div>

          {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}

          <Link
            href='/'
            className=' flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
          >
            <span>Iniciar sesión</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
