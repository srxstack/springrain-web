// 生成自增的长度为n的数组，从0开始
export function generateArray(n: number): number[] {
  return Array.from({ length: n }, (_, index) => index)
}
