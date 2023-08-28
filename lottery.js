const generate = require("./mock.generate");

// function lottery(expected) {
//   const got = generate();

//   console.log({ got });

//   if (expected !== got) {
//     return "You lost:(";
//   }
//   return "You won $$$";
// }

// // console.log(lottery(5));
// // console.log(lottery(11));
// // console.log(lottery(17));
// // console.log(lottery(25));

// module.exports = lottery;
//////////////////////////////////

//загадаємо цифру 2

function lottery(expected) {
  const got = generate();

  console.log({ got });

  if (expected !== got) {
    return "You lost:(";
  }
  return "You won $$$";
}

module.exports = lottery;
