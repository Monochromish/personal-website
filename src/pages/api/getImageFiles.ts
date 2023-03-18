import fsPromises from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const imageDirectory = path.join(process.cwd(), 'public', 'images', 'Albums');

  try {
    const filenames = await fsPromises.readdir(imageDirectory);

    res.status(200).json({
      filenames: filenames.filter((filename) => filename.endsWith('.jpeg')),
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
