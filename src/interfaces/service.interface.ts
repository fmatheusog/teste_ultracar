export interface Service {
  id: string;
  name: string;
  description: string;
  status: string;
  parts: string[];
  price: number;
  start_date: Date;
  finish_date?: Date;
}