'use client';

import { FunctionComponent } from "react";
import { useRouter } from 'next/router'
import Image from "next/image";

const Menu: FunctionComponent = () => {
  const router = useRouter();

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      router.push('/');
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-sky-500 border-r-2 border-gray-200 flex-grow">
        <div className="flex justify-center items-center py-4 px-6">
          <span className="text-white text-lg font-bold">Ultracar</span>
        </div>
        <ul className="flex flex-col py-4">
          <li className="bg-blue-500 px-4 py-2 rounded-md text-white m-1 cursor-pointer">
            <button className="w-full" onClick={() => router.push('/home')}>Home</button>
          </li>
          <li className="bg-blue-500 px-4 py-2 rounded-md text-white m-1 cursor-pointer">
            <button 
              className="w-full"
              onClick={() => router.push('/services/create')}
            >
              Novo serviço
            </button>
          </li>
          <li className="bg-blue-500 px-4 py-2 rounded-md text-white m-1 cursor-pointer">
            <button
              className="w-full"
              onClick={() => router.push('/services')}
            >
              Lista de serviços
            </button>
          </li>
          <li className="bg-red-500 px-4 py-2 rounded-md text-white m-1 cursor-pointer">
            <button className="w-full" onClick={ logout }>Sair</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
