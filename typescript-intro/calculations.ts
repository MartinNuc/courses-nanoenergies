console.log('xxx');

export function sumNumbers(numbers: Array<number>) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

export const add = (a: number, b: number): number => a + b;
