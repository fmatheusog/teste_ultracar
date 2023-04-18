import Menu from "@/components/menu";
import { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  const services = [
    {
      id: 1,
      title: "Serviço 1",
      description: "Descrição do serviço 1",
      status: "em andamento",
    },
    {
      id: 2,
      title: "Serviço 2",
      description: "Descrição do serviço 2",
      status: "em andamento",
    },
    {
      id: 3,
      title: "Serviço 3",
      description: "Descrição do serviço 3",
      status: "em andamento",
    },
  ];

  return (
    <div className="flex h-full">
      <div className="w-64">
        <Menu />
      </div>
      <div className="w-full m-8">
        <h1 className="text-3xl font-bold mb-5">Serviços em Andamento</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-green-500 font-bold">{service.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
