const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("minus", function () {
  async function CheckMinus() {
    const input1 = 5;
    const input2 = 3;
    const input3 = 2;
    const input4 = 4;
    const MyMinusCalculator = await ethers.getContractFactory(
      "MyMinusCalculator"
    );
    const myMinusCalculator = await MyMinusCalculator.deploy();
    return { myMinusCalculator, input1, input2, input3, input4 };
  }

  it("Should return the minus of two numbers", async function () {
    const { myMinusCalculator, input1, input2 } = await loadFixture(CheckMinus);
    const result1 = await myMinusCalculator.minus(input1, input2);
    expect(result1).to.equal(input1 - input2);
  });

  it("Should return the minus of two numbers", async function () {
    const { myMinusCalculator, input3, input4 } = await loadFixture(CheckMinus);
    const result2 = await myMinusCalculator.minus(input3, input4);
    expect(result2).to.equal(input4 - input3);
  });
});
