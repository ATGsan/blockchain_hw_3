const hre = require("hardhat");
async function main() {
    const ATCOIN = await hre.ethers.getContractFactory("ATCOIN");
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await ATCOIN.deploy();
    await myNFT.deployed();
    console.log("Contract deployed to address:", myNFT.address);
}

main().then(() => process.exit(0)).catch((error) => {
    console.error("Error:", error);
    process.exit(1);
});