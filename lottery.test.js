const lottery = require("./lottery");

//робимо mock
const mockGenerate = jest.fn();

jest.mock("./mock.generate", () => {
  return () => mockGenerate();
});

describe("lottery", () => {
  beforeAll(() => {
    mockGenerate.mockImplementation(() => 2);
  });

  test("should won when 2", () => {
    const result = lottery(2);
    expect(result).toBe("You won $$$");
  });

  test("should lose when 1", () => {
    const result = lottery(1);
    expect(result).toBe("You lost:(");
  });
});
