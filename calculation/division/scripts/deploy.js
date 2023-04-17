const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MyDivisionCalculator = await ethers.getContractFactory(
    "MyDivisionCalculator"
  );
  const myDivisionCalculator = await MyDivisionCalculator.connect(
    myAccount
  ).deploy();
  await myDivisionCalculator.deployed();

  const instance = "0x4e55C3A80BcA379Ff5F26836A18a988b6c1F09e8";
  const DivisionCalculatorProblem = await ethers.getContractFactory(
    "DivisionCalculatorProblem"
  );
  const divisionCalculatorProblem = DivisionCalculatorProblem.attach(instance);
  divisionCalculatorProblem.setDivisionCalculator(myDivisionCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
