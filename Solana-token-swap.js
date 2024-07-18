const solanaWeb3 = require('@solana/web3.js');
const { Token, TOKEN_PROGRAM_ID } = require('@solana/spl-token');

const SOL_MINT_ADDRESS = "So11111111111111111111111111111111111111112";
const DOGWIFTHAT_MINT_ADDRESS = "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm";

const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'), 'confirmed');

async function swapTokens() {
    const payer = solanaWeb3.Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.SOLANA_SECRET_KEY)));

    const solMint = new solanaWeb3.PublicKey(SOL_MINT_ADDRESS);
    const dogwifthatMint = new solanaWeb3.PublicKey(DOGWIFTHAT_MINT_ADDRESS);

    const solToken = new Token(connection, solMint, TOKEN_PROGRAM_ID, payer);
    const dogwifthatToken = new Token(connection, dogwifthatMint, TOKEN_PROGRAM_ID, payer);

    const solTokenAccount = await solToken.getOrCreateAssociatedAccountInfo(payer.publicKey);
    const dogwifthatTokenAccount = await dogwifthatToken.getOrCreateAssociatedAccountInfo(payer.publicKey);
const solanaWeb3 = require('@solana/web3.js');
const { Token, TOKEN_PROGRAM_ID } = require('@solana/spl-token');

const SOL_MINT_ADDRESS = "So11111111111111111111111111111111111111112";
const DOGWIFTHAT_MINT_ADDRESS = "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm";

const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'), 'confirmed');

async function swapTokens() {
    const payer = solanaWeb3.Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.SOLANA_SECRET_KEY)));

    const solMint = new solanaWeb3.PublicKey(SOL_MINT_ADDRESS);
    const dogwifthatMint = new solanaWeb3.PublicKey(DOGWIFTHAT_MINT_ADDRESS);

    const solToken = new Token(connection, solMint, TOKEN_PROGRAM_ID, payer);
    const dogwifthatToken = new Token(connection, dogwifthatMint, TOKEN_PROGRAM_ID, payer);

    const solTokenAccount = await solToken.getOrCreateAssociatedAccountInfo(payer.publicKey);
    const dogwifthatTokenAccount = await dogwifthatToken.getOrCreateAssociatedAccountInfo(payer.publicKey);

    const amountToSwap = 1 * solanaWeb3.LAMPORTS_PER_SOL;

    const transaction = new solanaWeb3.Transaction().add(
        solToken.createTransferInstruction(
            solTokenAccount.address,
            dogwifthatTokenAccount.address,
            payer.publicKey,
            amountToSwap,
            []
        )
    );

    transaction.feePayer = payer.publicKey;
    const { blockhash } = await connection.getRecentBlockhash();
    transaction.recentBlockhash = blockhash;

    transaction.sign(payer);

    const signature = await connection.sendRawTransaction(transaction.serialize());
    await connection.confirmTransaction(signature);

    console.log("Transaction completed with signature:", signature);
}

swapTokens().catch(console.error);

    const amountToSwap = 1 * solanaWeb3.LAMPORTS_PER_SOL;

    const transaction = new solanaWeb3.Transaction().add(
        solToken.createTransferInstruction(
            solTokenAccount.address,
            dogwifthatTokenAccount.address,
            payer.publicKey,
            amountToSwap,
            []
        )
    );

    transaction.feePayer = payer.publicKey;
    const { blockhash } = await connection.getRecentBlockhash();
    transaction.recentBlockhash = blockhash;

    transaction.sign(payer);

    const signature = await connection.sendRawTransaction(transaction.serialize());
    await connection.confirmTransaction(signature);

    console.log("Transaction completed with signature:", signature);
}

swapTokens().catch(console.error);
