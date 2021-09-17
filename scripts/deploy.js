// const { ethers } = require("ethers");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying Contracts with the account: ", deployer.address);

  console.log("Account balance: ", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Wave Portal");
  const token = await Token.deploy();

  console.log("WavePortal Address: ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });