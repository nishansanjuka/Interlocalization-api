import * as fs from 'fs/promises';
import * as path from 'path';

import { Dictionary } from "../types";


const dictionaries: { [key: string]: Promise<Dictionary> } = {
    en: readDictionary('en.json'),
    fr: readDictionary('fr.json'),
};

async function readDictionary(locale_filename: string): Promise<Dictionary> {
    const filePath = path.join(__dirname, `${locale_filename}`);
  
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(fileContent);
    } catch (error) {
      console.error(`Error reading dictionary for ${locale_filename}: ${error}`);
      throw error;
    }
}

export const getDictionary = async (locale: string) => dictionaries[locale];