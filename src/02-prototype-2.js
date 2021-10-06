// Constructor function
function DogObject(name, age) {
  this.name = name;
  this.age = age;
}
DogObject.prototype.speak = function () {
  return "I am a dog";
};

let beethoven = new DogObject("Beethoven", 7);
let bingo = new DogObject("Bingo", 9);
