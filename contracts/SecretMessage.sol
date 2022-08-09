// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SecretMessage {
    uint256 public totalMessage;

    constructor() {
        console.log("Hello World");
    }

    function sendMessage() public {
        totalMessage++;
        console.log("%s sent a message", msg.sender);
    }

    function getTotalMessage() public view returns (uint256) {
        console.log("%s messages sent", totalMessage);
        return totalMessage;
    }
}
