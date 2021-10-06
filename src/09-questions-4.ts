function sum(a: number, c?: number): number | ((x: number) => number) {
  if (c) return a + c;
  else
    return function (b: number): number {
      return a + b;
    };
}

console.log(sum(66, 4));
console.log((<(x: number) => number>sum(66))(4));
