function sum(a, c) {
  if (c) return a + c;
  else
    return function (b) {
      return a + b;
    };
}

console.log(sum(66, 4));
console.log(sum(66)(4));
