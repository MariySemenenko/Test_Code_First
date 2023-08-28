const greet = require("./snapshots_greet");

describe("greet", () => {
  it("Should return 'Hello World'", () => {
    const result = greet();

    //expect(result).toMatchSnapshot();
    //or
    expect(result).toMatchInlineSnapshot(`"Hello World!"`);//можна згенерувати новий текст


  });
});
//запустити npn test, щоб появилась папка __snapshots__
