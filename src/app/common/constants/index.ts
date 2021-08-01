import * as dotenv from 'dotenv';

dotenv.config();
const TOKEN = process.env.TOKEN as string;
const URL = process.env.URL as string;

export { TOKEN, URL };
