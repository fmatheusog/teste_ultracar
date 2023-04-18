// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Service } from '@/interfaces/service.interface';
import { services } from '../../../../data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Service[]>
) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body);
    services.push(data);
    return res.status(201).json(data);
  } else {
    console.log('Erro no processamento');
  }
}
