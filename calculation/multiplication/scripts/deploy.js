const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MyMultiplicationCalculator = await ethers.getContractFactory(
    "MyMultiplicationCalculator"
  );
  const myMultiplicationCalculator = await MyMultiplicationCalculator.connect(
    myAccount
  ).deploy();
  await myMultiplicationCalculator.deployed();

  const instance = "0x56bD215b5C6be31c0D51ef93b1B9eBE836Ca2EBc";
  const MultiplicationCalculatorProblem = await ethers.getContractFactory(
    "MultiplicationCalculatorProblem"
  );
  const multiplicationCalculatorProblem =
    MultiplicationCalculatorProblem.attach(instance);
  multiplicationCalculatorProblem
    .connect(myAccount)
    .setMultiplicationCalculator(myMultiplicationCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
