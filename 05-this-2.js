// It points to the object that contains the function which ‘this’ is referenced from
function a() {
  console.log(this);

  function x() {
    console.log("inside x..");
    console.log(this);
  }

  const y = function () {
    console.log("inside y..");
    console.log(this);
  };

  x();
  y();
}

const b = function () {
  console.log(this);
};

a();
b();
