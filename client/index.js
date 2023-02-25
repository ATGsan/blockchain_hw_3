const Web3 = require('web3');
const Contract = require('web3-eth-contract');
const fs = require('fs');

const rpcURL = "https://goerli.infura.io/v3/dxxxxxx";
const web3 = new Web3(rpcURL);
const address = "0xxxxxxxxxxxxxxxxx";

const interface = JSON.parse(fs.readFileSync('../artifacts/contracts/ATCOIN.sol/ATCOIN.json')).abi;

Contract.setProvider(rpcURL);
contract = new Contract(interface, address);

contract.methods.addToStructMapping("Alex", 19, false).call().then(console.log);

contract.getPastEvents('allEvents',
                       {
                        filter: {name_: ["Alex"]},
                        fromBlock: 0,
                       },
                       function(error, events){ console.log(events); })
                       .then(console.log);
