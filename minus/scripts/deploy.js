const hre = require("hardhat");

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const MyMinusCalculator = await ethers.getContractFactory(
    "MyMinusCalculator"
  );
  const myMinusCalculator = await MyMinusCalculator.connect(addr1).deploy();
  await myMinusCalculator.deployed();

  const instance = "0x50683c2f3eCB224f2ee1630700784011d11BC504"; // 이곳에 문제 Contract 주소를 넣어주세요
  const MinusCalculatorProblem = await ethers.getContractFactory(
    "MinusCalculatorProblem"
  );
  const minusCalculatorProblem = await MinusCalculatorProblem.attach(instance);
  await minusCalculatorProblem.setMinusCalculator(
    minusCalculatorProblem.address
  );
}
async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
