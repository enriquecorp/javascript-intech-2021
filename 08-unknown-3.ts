type unknownType = { prop1: unknown; prop2: unknown };
const unknownFoo: unknownType = {
  prop1: "hello",
  prop2: { foo: "bar" },
};

// Error: Object is of type 'unknown' 🤷‍♂️
// console.log(unknownFoo.prop2.foo);
export {};
