require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    // goerli 추가
    goerli: {
      url: "https://dimensional-restless-sea.ethereum-goerli.discover.quiknode.pro/d39bd66f2b83366e5c63aeee1e57fe5173e65fc9/", // 이곳에 URL을 수정하세요
      accounts: [
        `0x63ddbd684f4865dca9babf1275dfc305a2c0f190524adeedabda8ebde9d34cca`,
      ],
    },
  },
};
