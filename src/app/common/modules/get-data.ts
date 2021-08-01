import fetch from 'node-fetch';
import { TOKEN, URL } from '../constants';
import { Project } from '../interfaces';
import spinner from './spinner';

export default async function getData(): Promise<Project[]> {
  const url = URL;
  const headers = { 'Clubhouse-Token': TOKEN };

  if (TOKEN === '' || URL === '') {
    console.log('Error: check the env file please');
    process.exit(1);
  }
  const fetchSpinner = spinner(`start fetch data`).start();
  const requestOptions = {
    method: 'GET',
    headers
  };

  let data: Project[] = [];
  try {
    const response = await fetch(url, requestOptions);
    data = await response.json();
  } catch (e) {
    fetchSpinner.stop();
    console.log('Error: fetch data error', e.message);
    process.exit(1);
  }
  fetchSpinner.succeed('data fetched successfully');
  return data;
}
