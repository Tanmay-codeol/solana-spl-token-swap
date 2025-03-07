

# Solana SPL Token Swap Script

This project contains a JavaScript script to swap Solana SPL tokens using the Solana blockchain and the Serum decentralized exchange (DEX).

## Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher)
- Solana Web3.js and Serum libraries

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/Tanmay-codeol/solana-spl-token-swap.git
    cd solana-spl-token-swap
    ```

2. Install the required dependencies:

    ```bash
    npm install @solana/web3.js @project-serum/serum
    ```

## Configuration

1. Create a `.env` file in the root of your project and add your Solana private key:

    ```env
    SOLANA_SECRET_KEY=[your_secret_key_array]
    ```

   Replace `[your_secret_key_array]` with your actual Solana private key in JSON array format.

2. Update the `marketAddress` variable in the `swapTokens` function with the actual market address for the SOL/DOGWIFTHAT pair:

    ```javascript
    const marketAddress = new solanaWeb3.PublicKey('Market_Address');
    ```

## Usage

Run the script:

```bash
node swap.js
 
