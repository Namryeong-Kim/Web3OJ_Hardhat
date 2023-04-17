const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("plus", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function CheckPlus() {
    const input1 = 3;
    const input2 = 5;
    const MyPlusCalculator = await ethers.getContractFactory(
      "MyPlusCalculator"
    );
    const myPlusCalculator = await MyPlusCalculator.deploy();
    return { myPlusCalculator, input1, input2 };
  }

  it("Should return the sum of two numbers", async function () {
    const { myPlusCalculator, input1, input2 } = await loadFixture(CheckPlus);
    const result = await myPlusCalculator.plus(input1, input2);
    expect(result).to.equal(input1 + input2);
  });
});
