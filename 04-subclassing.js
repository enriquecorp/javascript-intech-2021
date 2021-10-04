class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sing() {
    return `${this.name} can sing`;
  }
  dance() {
    return `${this.name} can dance`;
  }
}
class Cats extends Animals {
  constructor(name, age, whiskerColor) {
    super(name, age);
    this.whiskerColor = whiskerColor;
  }
  whiskers() {
    return `I have ${this.whiskerColor} whiskers`;
  }
}
let figaro = new Cats("Figaro", 3, "indigo");
