function DogObject(name, age) {
  let dog = Object.create(constructorObject);
  dog.name = name;
  dog.age = age;
  return dog;
}
let constructorObject = {
  speak: function () {
    return "I am a dog";
  },
};
let beethoven = DogObject("Beethoven", 7);
console.log(beethoven);

let bingo = DogObject("Bingo ", 9);
console.log(bingo);
