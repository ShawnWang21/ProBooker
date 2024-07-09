// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../../app/lib/appwrite.config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await users.list();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}
