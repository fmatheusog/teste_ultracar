import Menu from "@/components/menu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ServiceDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [parts, setParts] = useState([]);
  const [price, setPrice] = useState("");

  const fetchData = async () => {
    const res = await fetch(`/api/services/${id}`);
    const data = await res.json();

    setName(data.name);
    setDescription(data.description);
    setStatus(data.status);
    setStartDate(data.start_date);
    setParts(data.parts);
    setPrice(data.price);
  };

  const handleFinishService = () => {};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-grow">
      <div className="w-64">
        <Menu />
      </div>
      <div className="w-full m-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-gray-600 font-medium text-sm mb-2">Preço:</h3>
              <p className="text-gray-800 text-lg font-semibold">{price}</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium text-sm mb-2">Peças:</h3>
              <p className="text-gray-800 text-lg font-semibold">{parts}</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium text-sm mb-2">
                Status:
              </h3>
              <p className="text-gray-800 text-lg font-semibold">{status}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-gray-600 font-medium text-sm mb-2">
                Data de início:
              </h3>
              <p className="text-gray-800 text-lg font-semibold">{startDate}</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium text-sm mb-2">
                Data de conclusão:
              </h3>
              <p className="text-gray-800 text-lg font-semibold">
                {finishDate}
              </p>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            onClick={handleFinishService}
          >
            Finalizar serviço
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
