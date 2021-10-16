const { Blockchain, Transaction } = require("./blockchain");

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "1f68278504adea97419b4953d0a3dd5ad3e753a8fdf2f5429132838b919dd896"
);

const myWalletAddress = myKey.getPublic("hex");

let coin = new Blockchain();

const transaction1 = new Transaction(
  myWalletAddress,
  "public key goes here",
  10
);
transaction1.signTransaction(myKey);
coin.addTransaction(transaction1);

console.log("\n Starting the miner");
coin.minePendingTransactions(myWalletAddress);

console.log("\n Your balance is: ", coin.getBalanceOfAddress(myWalletAddress));

console.log("Is Chain Valid? ", coin.isChainValid());
