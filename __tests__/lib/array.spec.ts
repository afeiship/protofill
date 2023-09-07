import '../../src';
import '../../src/types/array-extensions.d.ts';

describe('api.array', () => {
  test('api.first set/get by "first" property', () => {
    // get
    expect([1, 2, 3].first).toBe(1);
    // set
    const arr = [1, 2, 3];
    arr.first = 4;
    expect(arr).toEqual([4, 2, 3]);
  });

  test('api.first set/get by original index', () => {
    const arr = [1, 2, 3];
    arr[0] = 4;
    expect(arr.first).toBe(4);

    arr.first = 5;
    expect(arr).toEqual([5, 2, 3]);
  });

  test('api.last set/get with last api', () => {
    const arr = [1, 2, 3];
    expect(arr.last).toBe(3);
    arr.last = 4;
    expect(arr).toEqual([1, 2, 4]);
  });

  test('api.filter2tuple', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [even, odd] = numbers.filter2tuple((item) => item % 2 === 0);
    expect(even).toEqual([2, 4, 6]);
    expect(odd).toEqual([1, 3, 5]);
  });
});
