'use server';

import Menu from "@/components/menu";
import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Service } from "@/interfaces/service.interface";

const Home: FunctionComponent = () => {
  const router = useRouter();
  const [serviceList, setServiceList] = useState<Service[]>([]);

  const fetchData = async () => {
    const response = await fetch("/api/services");
    const data = await response.json();
    setServiceList(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="flex h-full">
      <div className="w-64">
        <Menu />
      </div>
      <div className="w-full m-8">
        <h1 className="text-3xl font-bold mb-5">Serviços em Andamento</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          { serviceList ? (
            serviceList
              .filter((service) => service.status == 'in-progress')
              .map((service) => (
                <div
                  key={service.id}
                  onClick={() => router.push(`/services/${service.id}`)}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                  <h2 className="text-xl font-bold mb-2">{service.name}</h2>
                  <p className="text-gray-600 mb-4"><span className="font-bold">ID:</span> {service.id}</p>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  { service.has_parts ? (
                    <p className="text-green-600 font-bold mb-4">Contém peças</p>
                    ) : (
                      <p className="text-red-600 font-bold mb-4">Não contém peças</p>
                      )}
                  <p className="mb-4">Status: <span className="font-bold text-green-500">{service.status}</span></p>
                  <p className="text-gray-600 mb-4">R$ {service.price}</p>
                </div>
              ))
            ) : null }
        </div>
      </div>
    </div>
  );
};

export default Home;
