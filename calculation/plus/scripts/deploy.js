const hre = require("hardhat");

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const MyPlusCalculator = await ethers.getContractFactory("MyPlusCalculator");
  const myPlusCalculator = await MyPlusCalculator.connect(addr1).deploy();
  await myPlusCalculator.deployed();

  const instance = "0x77c9A3d0828b6f34376b487E45527E800F3C433b"; // 이곳에 문제 Contract 주소를 넣어주세요
  const PlusCalculatorProblem = await ethers.getContractFactory(
    "PlusCalculatorProblem"
  );
  const plusCalculatorProblem = await PlusCalculatorProblem.attach(instance);
  await plusCalculatorProblem.setPlusCalculator(myPlusCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
