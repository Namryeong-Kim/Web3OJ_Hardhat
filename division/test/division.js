const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("division", function () {
  async function calculatorSol() {
    const input1 = 12;
    const input2 = 4;
    const [owner] = await ethers.getSigners();

    const MyDivisionCalculator = await ethers.getContractFactory(
      "MyDivisionCalculator"
    );
    const myDivisionCalculator = await MyDivisionCalculator.deploy();

    return { myDivisionCalculator, input1, input2 };
  }

  describe("Deployment", function () {
    it("Should set the right result", async function () {
      const { myDivisionCalculator, input1, input2 } = await loadFixture(
        calculatorSol
      );

      expect(await myDivisionCalculator.divide(input1, input2)).to.equal(
        input1 / input2
      );
    });
  });
});
