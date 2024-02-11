import express, { Request, Response } from 'express';
import { SupportedLanguages } from './enums';
import { ContentQuery } from './types';
import { getDictionary } from './lang/dictionaries';

const app = express();
const port = 3000;

app.get('/api/content', async (req: Request<{}, {}, {}, Partial<ContentQuery>>, res: Response)  =>  {
  
  const lang = req.query.lang;

  if (!lang) {
    res.status(400).json({ error: 'Missing lang parameter' });
    return;
  }

  if (lang !== SupportedLanguages.English && lang !== SupportedLanguages.French) {
    res.status(400).json({ error: 'Invalid lang parameter. Supported values are "en" or "fr".' });
    return;
  }

  const dictionary = await getDictionary(lang);
  res.json({lang , dictionary })
});

app.listen(port, () => {
  console.log(`Server is running`);
});
