var c = {
  name: "The object c",
  log: function () {
    this.name = "First update";
    console.log(this);

    function changeName(newvalue) {
      //THIS LINE CONTAINS THE JAVASCRIPT ERROR
      this.name = newvalue;
    }

    changeName("Updated again!");
    console.log(this);
  },
};

c.log();
