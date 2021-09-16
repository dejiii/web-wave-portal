async function main() {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  //  This will compile the contract and generate the necessary files needed to work with the contract under the artifacts directory.

  const waveContract = await waveContractFactory.deploy();
  //   Hardhat will create a local Ethereum network for us, but just for this contract.
  // Then, after the script completes it’ll destroy that local network.
  // So, every time you run the contract, it’ll be a fresh blockchain.

  await waveContract.deployed();
  //   We’ll wait until our contract is officially deployed to our local blockchain!
  //   Our `constructor` runs when we actually deploy.

  console.log("Contract Deployed to: ", waveContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
