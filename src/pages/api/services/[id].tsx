// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Service } from '@/interfaces/service.interface';
import { services } from '../../../data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Service>
) {
  const {
    query: { id },
  } = req;

  const result = services.find((s) => s.id === id);

  if (result) {
    res.status(200).json(result);
  }
}
