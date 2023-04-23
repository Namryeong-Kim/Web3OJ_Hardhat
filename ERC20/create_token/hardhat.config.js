require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    // goerli 추가
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/SPX9BSbJHNKqeAqzozoz8Qrc6qqE94lr", // 이곳에 URL을 수정하세요
      accounts: [
        "0x30d655a16c1b9122bf3650d897c3ec4099b16c0b4ae307387206509b473530b3",
      ],
    },
  },
  plugins: ["@nomiclabs/hardhat-web3"],
};
