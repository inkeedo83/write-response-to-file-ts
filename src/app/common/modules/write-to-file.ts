import fs from 'promise-fs';
import { ProjectOut } from '../interfaces';
import { dirIsExist, fileNameValidator } from '../validators';
import spinner from './spinner';

export default async function writeToFile(
  projects: ProjectOut[],
  fileName: string
): Promise<void> {
  const saveSpinner = spinner(`saving Data`).start();
  if (!fileNameValidator(fileName)) {
    saveSpinner.fail('Error: no file name input..');
    process.exit(1);
  }

  // check if directory exists
  const dir = `output`;
  if (!dirIsExist(dir)) {
    try {
      await fs.mkdir(dir);
    } catch (e) {
      saveSpinner.fail(
        `Error: some error withe create dir ${dir}\n${e.message}`
      );

      process.exit(1);
    }
  }
  // create final path to save file
  const outputFileName = `${dir}/${fileName}.json`;

  // prepare data to save file
  const saveObj = { projects };

  // save
  try {
    await fs.writeFile(outputFileName, JSON.stringify(saveObj), 'utf8');
    saveSpinner.succeed(`data saved to file ${outputFileName} successfully`);
  } catch (e) {
    saveSpinner.fail(`Error:, ${e.message}`);
  }
}
