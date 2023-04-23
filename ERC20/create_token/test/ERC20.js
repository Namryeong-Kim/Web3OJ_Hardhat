const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("mintToken", function () {
  async function mintToken() {
    const [myAccount] = await ethers.getSigners();

    const mintToken = await ethers.getContractFactory("mintToken");
    const minttoken = await mintToken
      .connect(myAccount)
      .deploy(myAccount.address);
    await minttoken.deployed();

    const ERC20Init = await ethers.getContractFactory("ERC20Init");
    const ERC20init = await ERC20Init.deploy();
    await ERC20init.deployed();
    await ERC20init.setWeb3ojt(minttoken.address);
    return { myAccount, minttoken, ERC20init };
  }

  describe("mint", function () {
    it("Should be equal player balance to 2000000000 ETH", async function () {
      const { myAccount, minttoken } = await loadFixture(mintToken);
      const balance = ethers.utils.parseEther("2000000000");
      expect(await minttoken.balanceOf(myAccount.address)).to.equal(balance);
    });

    it("Should be equal totalSupply to 2000000000 ETH", async function () {
      const { minttoken } = await loadFixture(mintToken);
      const balance = ethers.utils.parseEther("2000000000");
      expect(await minttoken.totalSupply()).eq(balance);
    });

    it("web3ojt address is equal to mintToken contract address", async function () {
      const { minttoken, ERC20init } = await loadFixture(mintToken);

      expect(await ERC20init.web3ojt()).to.equal(minttoken.address);
    });
  });
});
