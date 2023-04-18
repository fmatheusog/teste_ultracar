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
    <div className="flex flex-col h-screen">
      <div className="bg-sky-500 border-r-2 border-gray-200 flex-grow">
        <div className="flex justify-between items-center py-4 px-6">
          Ultracar
          {/* <Image src="logo.png" alt="Logo da empresa" className="h-8" /> */}
        </div>
        <ul className="flex flex-col py-4">
          <li className="bg-blue-500 px-4 py-2 rounded-md text-white m-1 cursor-pointer">
            <button className="w-full">Home</button>
          </li>
          <li className="bg-blue-500 px-4 py-2 rounded-md text-white m-1 cursor-pointer">
            <button className="w-full">Novo serviço</button>
          </li>
          <li className="bg-blue-500 px-4 py-2 rounded-md text-white m-1 cursor-pointer">
            <button className="w-full">Lista de serviços</button>
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
