# ERC-20 토큰을 만들어보시오
Name : Web3 Online Judge Token
Symbol : WEB3OJT
Total Supply : 2,000,000,000 (20억개) (decimal: 18)
 

단, 생성한 WEB3OJT 토큰에 대해서 20억 WEB3OJT는 Player가 가지고 있도록 하시오

토큰 생성을 하였으면 ERC20Init의 setWeb3ojt(address _web3ojt)을 통해서 생성한 토큰주소를 등록하고 제출하시오

player는 문제 풀기에 사용된 지갑을 의미합니다

 

## 문제
` // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Init{
    ERC20 public web3ojt;

    function setWeb3ojt(address _web3ojt) public {
        web3ojt = ERC20(_web3ojt);
    }
} `
