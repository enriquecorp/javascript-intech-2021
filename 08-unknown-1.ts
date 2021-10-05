function prettyPrint2(x: unknown): string {
  if (Array.isArray(x)) {
    return "[" + x.map(prettyPrint2).join(", ") + "]";
  }
  if (typeof x === "string") {
    return `"${x}"`;
  }
  if (typeof x === "number") {
    return String(x);
  }
  return "etc.";
}
