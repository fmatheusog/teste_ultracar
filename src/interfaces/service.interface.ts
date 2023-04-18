export interface Service {
  id: string;
  name: string;
  description: string;
  status: string;
  has_parts?: boolean;
  parts: string[];
  price: number;
  start_date: Date;
  finish_date?: Date;
}