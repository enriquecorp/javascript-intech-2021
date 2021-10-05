const fullName = (user: any) => {
  if (user?.firstName && user?.lastName) {
    return `${user.lastName}, ${user.firstName}`;
  }

  const result = user?.firstName || "";
  console.log(result);
  return result;
};

fullName("");
fullName({ firstName: "Enrique" });
