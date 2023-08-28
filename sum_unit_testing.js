const sum = require('./sum')

function expect(actual) {
  return {
    toBe(expect) {
      if (actual !== expect) {
        throw new Error(`Expected ${expect}, but get ${actual}`);
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


// describe("sum", () => {
//     test("1 + 2 should return 3", () => {
//       const result = sum(1, 2);//act
//       expect(result).toBe(3);//assert
//     });
  
//     test("1 + (-2) should return -1", () => {
//       const result = sum(1, -2);
//       expect(result).toBe(-1);
//     });
  
//     test('"1" + "-2" should return -1', () => {
//       const result = sum("1", "-2");
//       expect(result).toBe(-1);
//     });
  
//or

describe("sum", () => {
    it("1 + 2 should return 3", () => {
      const result = sum(1, 2);//act
      expect(result).toBe(3);//assert
    });
  
    it("1 + (-2) should return -1", () => {
      const result = sum(1, -2);
      expect(result).toBe(-1);//toBe - matchers
    });
  
    it('"1" + "-2" should return -1', () => {
      const result = sum("1", "-2");
      expect(result).toBe(-1);
    });
    
  });