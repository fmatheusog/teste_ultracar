import { v4 } from "uuid";
import { Service } from "./interfaces/service.interface";

export const services: Service[] = [
  {
    id: v4(),
    name: "Cliente 1",
    description: "Descrição do serviço 1",
    status: "in-progress",
    has_parts: true,
    parts: ['lanterna', 'retrovisor'],
    start_date: new Date(),
    price: 500,
  },
  {
    id: v4(),
    name: "Cliente 2",
    description: "Descrição do serviço 2",
    status: "done",
    has_parts: false,
    parts: [],
    start_date: new Date(),
    price: 1000,
  },
  {
    id: v4(),
    name: "Cliente 3",
    description: "Descrição do serviço 3",
    status: "in-progress",
    has_parts: false,
    parts: [],
    start_date: new Date(),
    price: 300,
  },
];
