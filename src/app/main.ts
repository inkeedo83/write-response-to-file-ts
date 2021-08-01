import yargs from 'yargs';
import getData from './common/modules/get-data';
import { isEmpty, nonExistIds } from './common/validators';
import { Project, ProjectOut } from './common/interfaces';
import writeToFile from './common/modules/write-to-file';
import handleProcess from './common/modules/handler';
import spinner from './common/modules/spinner';

function mapData(data: Project[]): ProjectOut[] {
  return data.map(el => {
    const { id, name, description } = el;
    return { id, name, description };
  });
}

export default async function main(): Promise<void> {
  handleProcess();
  // define args with default values
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const args = yargs.options({
    outputFileName: {
      type: 'string',
      alias: 'o',
      default: 'out'
    },
    projectIds: { type: 'array', alias: 'p', default: [] }
  }).argv;

  // read args
  const params = yargs.argv;
  const fileName = params.o as string;
  const inputIds = params.p as number[];
  const inputDataSpinner = spinner(
    `your input params are:\n  - output file nameis: ${fileName}.json\n  - projects' Ids to save: ${
      inputIds.length > 0 ? inputIds : 'all'
    }`
  );
  inputDataSpinner.start().info();
  // get response data
  const data: Project[] = await getData();
  // check non exist ids and inform user
  const checkSpinner = spinner(`checking Ids`).start();
  const resArr = nonExistIds(data, inputIds);
  if (!isEmpty(resArr)) {
    checkSpinner.warn(`Non-exits id(s) ${JSON.stringify(resArr)}`);
  }
  checkSpinner.stop();
  // mapping projects data to format (id, name, description)
  const projects: ProjectOut[] =
    inputIds.length > 0
      ? mapData(data.filter(el => inputIds.indexOf(el.id) !== -1))
      : mapData(data);
  // save data to json file
  writeToFile(projects, fileName);
}
