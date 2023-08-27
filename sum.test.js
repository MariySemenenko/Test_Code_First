const sum = require("./sum");

// const result1 = sum(1, 2);
// if (result1 !== 3) {
//   throw new Error(`Expected 3, but get ${result1}`);
// }

// const result2 = sum(1, -2);
// if (result2 !== -1) {
//   throw new Error(`Expected -1, but get ${result2}`);
// }

// const result3 = sum("1", "-2");
// if (result3 !== -1) {
//   throw new Error(`Expected -1, but get ${result3}`);
// }

// console.log("Ok")

function expected(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected}, but get ${actual}`);
      }
    },
  };
}

function describe(text, cd) {
  console.log(text);
  cd();
}

function test(test, cd) {
  console.log(`  ${test}`);//2 пробіла для зміщення в консолі вправо
  cd();
}

describe("sum", () => {
  test("1 + 2 should return 3", () => {
    const result = sum(1, 2);//act
    expected(result).toBe(3);//assert
  });

  test("1 + (-2) should return -1", () => {
    const result = sum(1, -2);
    expected(result).toBe(-1);
  });

  test('"1" + "-2" should return -1', () => {
    const result = sum("1", "-2");
    expected(result).toBe(-1);
  });

  console.log("ok");
});
