// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Init{
    ERC20 public web3ojt;

    function setWeb3ojt(address _web3ojt) public {
        web3ojt = ERC20(_web3ojt);
    }
}

contract mintToken is ERC20{
    constructor (address _web3ojt) ERC20("Web3 Online Judge Token", "W3OJT") {
        uint256 amount = 2000000000 * (10 ** 18);
        _mint(_web3ojt, amount);
    }  
}