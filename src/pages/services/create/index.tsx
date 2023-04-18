import Menu from "@/components/menu";
import { Service } from "@/interfaces/service.interface";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { v4 } from 'uuid';

const CreateService: FunctionComponent = () => {
  const router = useRouter();

  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max)
  }
  const handleNewService = async () => {
    const service: Service = {
      id: v4(),
      name: `Cliente ${getRandomNumber(100)}`,
      description: `Descrição do serviço ${getRandomNumber(1000)}`,
      status: "in-progress",
      parts: [],
      price: getRandomNumber(5000),
      start_date: new Date()
    }

    const response = await fetch('/api/services/create', { method: 'POST', body: JSON.stringify(service) });

    if (response.status == 201) {
      const data = await response.json();
      return router.push('/home');
    }
  }

  return (
    <div className="flex min-h-screen flex-grow">
      <div className="w-64">
        <Menu />
      </div>
      <div className="w-full m-8">
        <div className="w-full max-w-md mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-lg font-medium mb-4">Novo serviço</h2>
            <div className="mb-4">
              <label
                htmlFor="qrCodeData"
                className="block text-gray-700 font-bold mb-2"
              >
                Ler QRCode
              </label>
              <div className="relative">
                <div className="relative w-64 h-64 bg-gray-300 rounded-md overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white animate-bounce">
                      <path d="M19.607,0H0.393C0.176,0,0,0.176,0,0.393v19.213C0,19.824,0.176,20,0.393,20h19.213c0.217,0,0.393-0.176,0.393-0.393V0.393C20,0.176,19.824,0,19.607,0z M5.625,17.613h-2.5v-2.5h2.5V17.613z M5.625,13.738h-2.5v-2.5h2.5V13.738z M5.625,9.863h-2.5v-2.5h2.5V9.863z M10.625,17.613h-2.5v-2.5h2.5V17.613z M10.625,13.738h-2.5v-2.5h2.5V13.738z M10.625,9.863h-2.5v-2.5h2.5V9.863z M15.625,17.613h-2.5v-2.5h2.5V17.613z M15.625,13.738h-2.5v-2.5h2.5V13.738z M15.625,9.863h-2.5v-2.5h2.5V9.863z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNewService}
                type="button"
              >
                Iniciar serviço
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateService;
