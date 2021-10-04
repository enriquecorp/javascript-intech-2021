type anyType = { prop1: any; prop2: any };

const anyFoo: anyType = {
  prop1: "hello",
  prop2: { foo: "bar" },
};

// No Errors - This defeats the purpose of TypeScript
console.log(anyFoo.prop2.whatever);
