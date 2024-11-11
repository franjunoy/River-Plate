'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import Login from './login/page';
import Link from 'next/link';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <html lang='en'>
      <body
        className={`h-screen ${
          isLoginPage ? 'flex justify-center items-center bg-gray-100' : 'flex'
        }`}
      >
        {isLoginPage ? (
          <div className='w-full h-full'>
            <Login />
          </div>
        ) : (
          <>
            <aside
              className='w-64 text-white flex flex-col p-4'
              style={{ backgroundColor: '#DA291C' }}
            >
              <div className='flex items-center justify-center mb-8 gap-4 w-full max-w-xs'>
                <Link
                  href='/login'
                  className='flex items-center border-white border-2 rounded py-1 px-1'
                >
                  <span className=' font-semibold text-center text-black'>
                    Iniciar sesión
                  </span>
                </Link>

                <Link
                  href='/register'
                  className='flex items-center border-white border-2 rounded py-1 px-1'
                >
                  <span className=' font-semibold text-center text-black'>
                    Registrarse
                  </span>
                </Link>
              </div>
              <nav className='flex flex-col gap-4'>
                <Link
                  href='/'
                  className='flex items-center gap-3 p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors'
                >
                  <span>🏠</span>
                  <span>Inicio</span>
                </Link>

                <a
                  href='/documentos'
                  className='flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition-colors'
                >
                  <span>📄</span>
                  <span>Documentos</span>
                </a>

                <a
                  href='/configuracion'
                  className='flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition-colors'
                >
                  <span>⚙️</span>
                  <span>Configuración</span>
                </a>

                <a
                  href='/estadisticas'
                  className='flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition-colors'
                >
                  <span>📊</span>
                  <span>Estadísticas</span>
                </a>

                <a
                  href='/perfil'
                  className='flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition-colors'
                >
                  <span>👤</span>
                  <span>Perfil</span>
                </a>
              </nav>
            </aside>

            <main className='flex-1 p-6 bg-gray-100 overflow-y-auto'>
              {children}
            </main>
          </>
        )}
      </body>
    </html>
  );
}
