const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("multiply", function () {
  async function calculatorSol() {
    const input1 = 3;
    const input2 = 4;
    const [myAccount] = await ethers.getSigners();

    const MyMultiplicationCalculator = await ethers.getContractFactory(
      "MyMultiplicationCalculator"
    );
    const myMultiplicationCalculator =
      await MyMultiplicationCalculator.deploy();

    return { myMultiplicationCalculator, input1, input2 };
  }

  describe("Deployment", function () {
    it("Should set the right multiply", async function () {
      const { myMultiplicationCalculator, input1, input2 } = await loadFixture(
        calculatorSol
      );

      expect(
        await myMultiplicationCalculator.multiply(input1, input2)
      ).to.equal(input1 * input2);
    });
  });
});
