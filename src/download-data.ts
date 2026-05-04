import * as fs from 'fs';
import * as axios from 'axios';

import { BASE_SIREN_URL } from './constants';

export const downloadAndSaveData = async () => {
  console.time('⏱ Download and save base SIREN');

  //@ts-ignore
  const names = await axios.get(BASE_SIREN_URL, { timeout: 120000 });
  const data = names.data;
  const filePath = `/tmp/sitemap-${new Date().getTime()}`;
  await fs.promises.writeFile(filePath, data, 'utf-8');

  console.timeEnd('⏱ Download and save base SIREN');

  return filePath;
};

export const deleteDataFile = async (filePath: string) => {
  await fs.promises.unlink(filePath);
};

export const cleanDistFolder = () => {
  const dir = './dist/';

  if (fs.existsSync(dir)) {
    console.info('📂 Cleaning existing /dist folder');
    fs.rmSync(dir, { recursive: true, force: true });
  }

  console.info('📂 Creating new /dist folder');
  fs.mkdirSync(dir);
};
