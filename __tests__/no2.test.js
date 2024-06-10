const { expect, it } = require("@jest/globals");
const no2 = require("../no2");

it("mengurutkan testcase1 [2, 1, 3, 6, 5, 7, 9, 8]", async () => {
  const answer = [1, 2, 3, 5, 6, 7, 8, 9];
  const result = no2([2, 1, 3, 6, 5, 7, 9, 8]);

  expect(result).toEqual(answer);
});

it("mengurutkan testcase2 [2, 3, 8, 7, 5]", async () => {
  const answer = [2, 3, 5, 7, 8];
  const result = no2([2, 3, 8, 7, 5]);

  expect(result).toEqual(answer);
});

it("mengurutkan testcase3 [1, 3, 9, 7, 6]", async () => {
  const answer = [1, 3, 6, 7, 9];
  const result = no2([1, 3, 9, 7, 6]);

  expect(result).toEqual(answer);
});
