type unknownType = { prop1: unknown; prop2: unknown };
const unknownFoo: unknownType = {
  prop1: "hello",
  prop2: { foo: "bar" },
};

function hasOwnProperty<X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> {
  return Object.hasOwnProperty.call(obj, prop);
}

if (
  unknownFoo.prop2 &&
  typeof unknownFoo.prop2 === "object" &&
  unknownFoo.prop2.hasOwnProperty("foo")
  // hasOwnProperty(unknownFoo.prop2, "foo")
) {
  // No TS errors!!
  // console.log(unknownFoo.prop2.foo);
}
// the code is unnecessarily complex
