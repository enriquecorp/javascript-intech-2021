interface User {
  firstName: string;
  lastName?: string;
}

const fullName2 = (user: User) => {
  const result = user.firstName + (user.lastName ? "," + user.lastName : "");
  console.log(result);
  return result;
};

//fullName2("");
fullName2({ firstName: "Enrique" });
