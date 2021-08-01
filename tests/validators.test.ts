import {
  dirIsExist,
  fileNameValidator,
  isEmpty,
  nonExistIds
} from '../src/app/common/validators';
import projectsData from './data';

describe('file name validator', () => {
  test('is empty', () => {
    expect(fileNameValidator('')).toBe(false);
  });

  test('is not empty', () => {
    expect(fileNameValidator('filename')).toBe(true);
  });
});

describe('dir exist validator', () => {
  test('directory is not exist', () => {
    expect(dirIsExist('out')).toBe(false);
  });

  test('directory is exist', () => {
    expect(dirIsExist('output')).toBe(true);
  });
});

describe('empty array validator', () => {
  test('is empty', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('is not empty', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });
});

describe('non-exist ids', () => {
  test('input ids that not exist in projects', () => {
    expect(nonExistIds(projectsData, [1, 2, 3])).toStrictEqual([3]);
  });

  test('all ids are founded in projects', () => {
    expect(nonExistIds(projectsData, [1, 2])).toStrictEqual([]);
  });
});
