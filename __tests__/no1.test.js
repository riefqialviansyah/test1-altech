const { expect, it } = require("@jest/globals");
const no1 = require("../no1");

it("looping 15 kali", async () => {
  const answerNum15 = `1\n2\nfish\n4\nbash\nfish\n7\n8\nfish\nbash\n11\nfish\n13\n14\nfish bash`;
  const result = no1(15);
  expect(result).toEqual(answerNum15);
});

it("looping 25 kali", async () => {
  const answerNum15 = `1\n2\nfish\n4\nbash\nfish\n7\n8\nfish\nbash\n11\nfish\n13\n14\nfish bash\n16\n17\nfish\n19\nbash\nfish\n22\n23\nfish\nbash`;
  const result = no1(25);
  expect(result).toEqual(answerNum15);
});

it("looping 50 kali", async () => {
  const answerNum15 = `1\n2\nfish\n4\nbash\nfish\n7\n8\nfish\nbash\n11\nfish\n13\n14\nfish bash\n16\n17\nfish\n19\nbash\nfish\n22\n23\nfish\nbash\n26\nfish\n28\n29\nfish bash\n31\n32\nfish\n34\nbash\nfish\n37\n38\nfish\nbash\n41\nfish\n43\n44\nfish bash\n46\n47\nfish\n49\nbash`;
  const result = no1(50);
  expect(result).toEqual(answerNum15);
});
