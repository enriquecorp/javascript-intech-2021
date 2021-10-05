// Optional parameters
const greeting = function (firstname, lastname, surename) {
  surename = surename || "";
  return "Hello " + firstname + " " + lastname + " " + surename;
};
greeting("Enrique", "Ortuno");
