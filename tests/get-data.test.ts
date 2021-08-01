import getData from '../src/app/common/modules/get-data';

describe('get data', () => {
  test('response as array', async () => {
    expect(await getData()).toEqual(expect.arrayContaining([]));
  });
  test('response as array with id property', async () => {
    expect(await getData()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: expect.any(Number) })
      ])
    );
  });
});
