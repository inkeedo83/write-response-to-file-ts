import fs from 'promise-fs';
import { Project } from '../interfaces';

function fileNameValidator(fileName: string): boolean {
  return fileName !== '';
}
function dirIsExist(dir: string): boolean {
  return fs.existsSync(dir);
}
function isEmpty(arr: number[]): boolean {
  return arr.length === 0;
}

function nonExistIds(projectsArr: Project[], inputIdsArr: number[]): number[] {
  const tempArr = projectsArr.map(el => el.id);
  const arr: number[] = [];

  inputIdsArr.forEach(v => {
    if (tempArr.indexOf(v) === -1) {
      arr.push(v);
    }
  });
  return arr;
}

export { fileNameValidator, dirIsExist, isEmpty, nonExistIds };
