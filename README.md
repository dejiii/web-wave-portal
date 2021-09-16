### Basic Sample Hardhat Project

*This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.*

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

1. We’re going to write a smart contract. That contract has all the logic around how the 👋 s are handled. This is like your server code.
 
2. Our smart contract will be deployed to the blockchain. This way, anyone in the world will be able to access and run our smart contract (if we give them permission to do so). So, pretty much like a server :).
 
3. We’re going to build a client website that will let people easily interact with our smart contract on the blockchain.
I’ll explain certain things in-depth as needed (ex. how mining working, how smart contracts are compiled and ran, etc) but for now lets just focus on getting stuff running.