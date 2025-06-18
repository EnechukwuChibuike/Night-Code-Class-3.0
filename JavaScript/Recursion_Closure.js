function nums(num) {
  if (num == 10) {
    console.log(num);
    return;
  }

  console.log(num);

  nums(num + 1);
}

nums(1);

function visitorUser() {
  const usersObj = {
    name: "John",
    email: "john@gmail.com",
    address: "343 Street",
    gender: "male",
    password: "........",
    friends: [
      {
        name: "Jane",
        email: "jane@gmail.com",
        address: "343 Street",
        gender: "female",
        password: "........",
      },
      {
        name: "Jenny",
        email: "jenny@gmail.com",
        address: "342 Street",
        gender: "female",
        password: "........",
      },
    ],
  };

  return function () {
    return usersObj.friends.find((friend) => friend.name === "Jenny");
  };
}

const bestFriend = visitorUser();

console.log(bestFriend());

(function () {
  console.log("Hello");
})();
