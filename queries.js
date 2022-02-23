const User = require("./models").user;
const Space = require("./models").space;

async function getUsersAndSpaces() {
  const allUsersWithSpaces = await User.findAll({ include: Space });
  return allUsersWithSpaces;
}

getUsersAndSpaces().then((data) => console.log(data));
