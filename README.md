# CryptoTicket

Github Link- https://github.com/Raktim2001/cryptoticket-master
CryptoTicket is a decentralized application (DApp) for managing event tickets using blockchain technology. This README provides instructions on how to set up and run the project.

## How to Run

1. **Ensure Node Version:**
   Please make sure to use Node.js version 18. If you have NVM installed, you can switch to Node.js version 18 by running:
   nvm use 18

2. **Install Dependencies:**
   Run the following command to install all missing dependencies:
   npm install

3. **Run Ethereum Node:**
   Split your terminal into three and run the following commands:

- On the first terminal, run:

  ```
  npx hardhat node
  ```

  This command starts a local Ethereum node and provides 20 dummy accounts with a thousand ETH in each.

- In the second terminal, run:
  ```
  npx hardhat run scripts/deploy.js --network localhost
  ```
  This command deploys the smart contract locally.

4. **Start Frontend:**
   Finally, in the third terminal, run:
   npm run start

This command starts the frontend of the application. You should be redirected to the final project site where you can connect your MetaMask account and use the website as you like.

## Project Structure

- `contracts/`: Contains the Solidity smart contract code.
- `scripts/`: Contains scripts for deploying and interacting with the smart contract.
- `src/`: Contains the frontend React application code.
- `test/`: Contains tests for the smart contract.
- `hardhat.config.js`: Hardhat configuration file for Ethereum development.

## Technologies Used

- **Frontend:** React JS
- **Backend:** Solidity, Hardhat
- **Blockchain:** Ethereum
