function stringifyForLogging(value: unknown): string {
  if (typeof value === "function") {
    // Within this branch, `value` has type `Function`,
    // so we can access the function's `name` property
    const s = value.toString().match(/function ([^\(]+)/);
    const functionName = (s && s[1]) || "anonymous"; //value.name || "(anonymous)";
    return `[function ${functionName}]`;
  }

  if (value instanceof Date) {
    // Within this branch, `value` has type `Date`,
    // so we can call the `toISOString` method
    return value.toISOString();
  }

  return String(value);
}

const result1 = stringifyForLogging(function abcxyz() {
  return 1 + 1;
});

console.log(result1);

const result2 = stringifyForLogging(Date.now());

console.log(result2);
