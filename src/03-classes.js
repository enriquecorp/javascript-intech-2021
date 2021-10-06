class Animals {
  constructor(name, specie) {
    this.name = name;
    this.specie = specie;
  }
  sing() {
    return `${this.name} can sing`;
  }
  dance() {
    return `${this.name} can dance`;
  }
}
let bingo = new Animals("Bingo", "Hairy");
console.log(bingo);
