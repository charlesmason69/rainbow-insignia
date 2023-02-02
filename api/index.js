// apiindex.js
// "proxy": "http://localhost:3001",
const express = require("express");
const bodyParser = require("body-parser");
const { ethers } = require('ethers');
const router = express.Router();
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const node = 'https://hidden-clean-isle.discover.quiknode.pro/b7598091054bebc56b919c05f2f39b2faa1a0ad2/';
const provider = new ethers.providers.JsonRpcProvider(node);


const tokenAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const tokenAbi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }]
const contract = new ethers.Contract(tokenAddress, tokenAbi, provider);



const walletCreate = async () => {

  const wallet = ethers.Wallet.createRandom();

  const response = { "address": wallet.address, "privateKey": wallet.privateKey,  }


  try {

    const wallet = ethers.Wallet.createRandom();
    //get ethereum wallet balance
    const balance = await provider.getBalance(wallet.address);
    //get wallet tokens

    provider.connection.headers = { "x-qn-api-version": 1 };
    const tokens = await provider.send("qn_getWalletTokenBalance", {
      wallet: wallet.address,
    });

    //handle responses from ethereum balance and getting tokens
    const response = { "privateKey": wallet.privateKey, "phrase": wallet.mnemonic.phrase, "ethBalance": ethers.utils.formatEther(balance), "address": tokens.owner, "assets": tokens.assets }
    return response;

  } catch (error) {
    // console.log(error.message);
    const response = { "error": "invalid secret phrase" };
  
  }

}

const phraseImport = async (phrase) => {

  const mnemonic = phrase;
  try {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    //get ethereum wallet balance

    const balance = await provider.getBalance(wallet.address);
    //get wallet tokens

    provider.connection.headers = { "x-qn-api-version": 1 };
    const tokens = await provider.send("qn_getWalletTokenBalance", {
      wallet: wallet.address,
    });

    //handle responses from ethereum balance and getting tokens
    const response = { "privateKey": wallet.privateKey, "ethBalance": ethers.utils.formatEther(balance), "address": tokens.owner, "assets": tokens.assets }
    return response;

  } catch (error) {
    // console.log(error.message);
    const response = { "error": "invalid secret phrase" };
    return response
  }

}


const privateImport = async (privateKey) => {

  try {
    const wallet = new ethers.Wallet(privateKey);
    //get ethereum wallet balance
    const balance = await provider.getBalance(wallet.address);

    //get wallet tokens
    provider.connection.headers = { "x-qn-api-version": 1 };
    const tokens = await provider.send("qn_getWalletTokenBalance", {
      wallet: wallet.address,
    });

    //handle responses from ethereum balance and getting tokens
    const response = { "privateKey": wallet.privateKey, "ethBalance": ethers.utils.formatEther(balance), "address": tokens.owner, "assets": tokens.assets }
    return response;


  } catch (error) {
    // console.log(error.message);
    const response = { "error": "Invalid private key" };
    return response;
  }

}

const keystoreImport = async (keystore, password) => {

  try {

    const wallet = await ethers.Wallet.fromEncryptedJson(keystore, password);
    //get ethereum wallet balance
    const balance = await provider.getBalance(wallet.address);

    //get wallet tokens
    provider.connection.headers = { "x-qn-api-version": 1 };
    const tokens = await provider.send("qn_getWalletTokenBalance", {
      wallet: wallet.address,
    });

    //handle responses from ethereum balance and getting tokens
    const response = { "privateKey": wallet.privateKey, "ethBalance": ethers.utils.formatEther(balance), "address": tokens.owner, "assets": tokens.assets }
    return response;

  } catch (error) {
    // console.log(error.message);
    const response = { "error": error.message }
    return response
  }

}


const addressImport = async (ethAddress) => {

  try {
    if (!ethers.utils.isAddress(ethAddress)) {
      const response = { "error": "invalid address" }
      return response;
    }
    else {
      provider.connection.headers = { "x-qn-api-version": 1 };
      const tokens = await provider.send("qn_getWalletTokenBalance", {
        wallet: ethAddress,
      });
      const response = { "owner": tokens.owner, "assets": tokens.assets }
      return response;
    }

  } catch (error) {
    console.log(error.message);
    const response = { "error": "invalid address" }
    return response
  }

}

const getTransactions = async (ethAddress, contractAddress) => {
  try {
    provider.connection.headers = { "x-qn-api-version": 1 };
    const transactions = await provider.send("qn_getWalletTokenTransactions", {
      address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      contract: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
      page: 1,
      perPage: 10,
    });
    console.log(transactions);
    const response = {"transfers": transactions.transfers}
    return response;

  } catch (error) {
    console.log(error.message);
    const response = { "error": "invalid transaction details" }
    return response;
  }

}


// Routes
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", function (_, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});




router.get("/create-wallet", (req, res) => {

  walletCreate().then((response) => {
    res.json(response);
    // console.log(response);
  })
});


router.post("/import-wallet-phrase", (req, res) => {
  // console.log(req.body.phrase);
  phraseImport(req.body.phrase).then((response) => {
    res.json(response);
    // console.log(response);
  })
});

router.post("/import-wallet-private-key", (req, res) => {
  // console.log(req.body.phrase);
  privateImport(req.body.privateKey).then((response) => {
    res.json(response);
    // console.log(response);
  })
});


router.post("/import-wallet-keystore", (req, res) => {
  // console.log(req.body.phrase);
  keystoreImport(req.body.keystore, req.body.password).then((response) => {
    res.json(response);
    // console.log(response);
  })
});

router.post("/import-address", (req, res) => {
  // console.log(req.body.phrase);
  addressImport(req.body.ethAddress).then((response) => {
    res.json(response);
    //  console.log(response);
  })
});

router.post("/get-transactions", (req, res) => {
  // console.log(req.body.phrase);
  getTransactions(req.body.ethAddress, req.body.contractAddress).then((response) => {
    res.json(response);
     console.log(response);
  })
});



app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// module.exports = app;