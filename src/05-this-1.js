// It points to the object that contains the function which ‘this’ is referenced from
//Function Statement
function a() {
  console.log(this);
}

//Function Expression
const b = function () {
  console.log(this);
};

a();
b();
