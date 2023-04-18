// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Service } from '@/interfaces/service.interface';
import { services } from '../../../data';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Service[]>
) {
  res.status(200).json(services);
}
