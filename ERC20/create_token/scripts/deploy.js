const { ethers, getNamedAccounts } = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const mintToken = await ethers.getContractFactory("mintToken");
  const minttoken = await mintToken
    .connect(myAccount)
    .deploy(myAccount.address);
  await minttoken.deployed();
  console.log("player address: ", myAccount.address);
  console.log("deployed to: ", minttoken.address);

  const instance = "0x2542A9C452fdc921A475CB809818FBDC8E53937E";
  const ERC20Init = await ethers.getContractFactory("ERC20Init");
  const ERC20init = ERC20Init.attach(instance);
  await ERC20init.setWeb3ojt(minttoken.address);
  const total_supply = await minttoken.totalSupply();
  const balance = await minttoken.balanceOf(myAccount.address);
  console.log("instance: ", instance);
  console.log(`Total Supply: ${total_supply} ETH`);
  console.log(`user balane: ${balance} `);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
