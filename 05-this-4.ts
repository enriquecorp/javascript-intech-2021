// It points to the object that contains the function which ‘this’ is referenced from
// const c = {
//   name: "The object c",
//   log: function () {
//     this.name = "First update";
//     console.log(this);

//     const changeName = function (newvalue) {
//       //THIS LINE CONTAINS THE JAVASCRIPT ERROR
//       this.name = newvalue;
//     };

//     changeName("Updated again!");
//     console.log(this);
//   },
// };

// c.log();
