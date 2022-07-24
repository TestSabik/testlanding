whitelisted = [
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0x5a0Ff66c3bE0D74a6159Bd37bDbF485DCf27F25d", 
    "0xFD3021AFE0Ff8C23b26713BB0c9D8540fdf8641B", 
    "0xAf81a3bD3c06A7e3B91af07F9fF67a43f5372E7d",
    "0xeC4290D7EbC99A3B5Ce68f1BeceEB69313a71c74",
    "0x9dA8699f75DECc0c1AE32Efab3A6Df04Caa70408",
    "0xafE3b5D8e773f48fE17ec35F5eAb00C829B1a448"
]

window.userAddress = null;

const CONTRACT_ADDRESS = "0x1B9dCef2005925a73bC7262431203c0ab781d50B";
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"InvalidQueryRange","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"burnedByOwner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"explicitOwnershipOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"explicitOwnershipsOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721A.TokenOwnership[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"melt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"qty","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"qty","type":"uint256"}],"name":"mintAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintedBySender","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleWhitelistMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"tokensOfOwnerIn","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBurned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"qty","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"whitelistMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wlMintOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];
const defaultChain = "rinkeby";
const defaultChainId = 4;
const defaultChainName = "Rinkeby Testnet";
let wlMintOpen = false;
let mintOpen = false;
let isEligibleForWl = false;
let maxPerWallet = 0;

window.onload = async () => {
    // Init Web3 connected to ETH network
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.web3.eth.defaultChain = defaultChain;
    } else {
        alert("No ETH brower extension detected.");
    }
};

window.ethereum.on("accountsChanged", async (accounts) => {
    if(!await checkChain()) {
        return;
    }
    if (accounts.length !== 0) {
        window.userAddress = accounts[0];
        await showAddress();
    }
});

window.ethereum.on('chainChanged', (_chainId) => window.location.reload());

// Use this function to turn a 42 character ETH address
// into an address like 0x345...12345
function truncateAddress(address) {
    if (!address) {
        return "";
    }
    return `${address.substr(0, 5)}...${address.substr(address.length - 5,address.length)}`;
}

// Display or remove the users know address on the frontend
async function showAddress() {
    if (!window.userAddress) {
        document.getElementById("connectButton").innerHTML = "";
        document.getElementById("mint").innerHTML = "Mint not active";
        document.getElementById("mint").classList.add("hidden");
        document.getElementById("mintText").innerHTML = "0 / 0";
        document.getElementById("mintText").classList.add("hidden");
        return false;
    }

    document.getElementById("connectButton").innerHTML = `${truncateAddress(window.userAddress)}`;
    document.getElementById("mint").classList.remove("hidden");
    document.getElementById("mintText").classList.remove("hidden");
    
    isEligibleForWl = false;
    window.proof = [];
    if(whitelisted.find(addr => addr.toLowerCase() == window.userAddress.toLowerCase()) !== undefined)
    {
        const leaves = whitelisted.map(addr => keccak256(addr.toLowerCase()));
        const tree = new MerkleTree(leaves, window.keccak256, { sort: true });
        const root = tree.getRoot().toString('hex');
        const leaf = keccak256(window.userAddress);
        proof = tree.getProof(leaf);
        console.log(tree.getHexRoot());
        console.log(tree.verify(proof, leaf, root));
        window.proof = tree.getHexProof(leaf);  
        isEligibleForWl = true;    
    }
    

    const contract = new window.web3.eth.Contract(ABI,CONTRACT_ADDRESS);
    console.log(contract);    
    totalSupply = await contract.methods.totalSupply().call({ from: window.userAddress });
    totalBurned = await contract.methods.totalBurned().call({ from: window.userAddress });
    totalSupply = parseInt(totalSupply) + parseInt(totalBurned);
    maxSupply = await contract.methods.maxSupply().call({ from: window.userAddress });
    maxSupply = parseInt(maxSupply);

    wlMintOpen = await contract.methods.wlMintOpen().call({ from: window.userAddress });
    mintOpen = await contract.methods.mintOpen().call({ from: window.userAddress });

    maxPerWallet = await contract.methods.maxPerWallet().call({ from: window.userAddress });
    maxPerWallet = parseInt(maxPerWallet);
    if((maxSupply - totalSupply) == 1) {
        maxPerWallet = 1;
    }
    
    mintedBySender = await contract.methods.mintedBySender().call({ from: window.userAddress });
    mintedBySender = parseInt(mintedBySender);

    maxPerWallet = Math.max(0,maxPerWallet - mintedBySender);

    document.getElementById("mintText").innerHTML = totalSupply + " / " + maxSupply;
    if(maxSupply <= totalSupply) {
        document.getElementById("mint").innerHTML = "Sold out!";
    } else if(maxPerWallet == 0) {
        document.getElementById("mint").innerHTML = "Already minted!";
    } else if (wlMintOpen && !isEligibleForWl) {
        document.getElementById("mint").innerHTML = "Not in whitelist";
    } else if (wlMintOpen || mintOpen) {
        document.getElementById("mint").innerHTML = "Mint " + maxPerWallet + " pile" + (maxPerWallet == 1?"":"s");
    }
    
}

// Login with Web3 via Metamasks window.ethereum library
async function loginWithEth() {
    if (window.web3) {
        try {
            if(!await checkChain()) {
                return;
            }
            // We use this since ethereum.enable() is deprecated. This method is not
            // available in Web3JS - so we call it directly from metamasks' library
            const selectedAccount = await window.ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts) => accounts[0])
            .catch(() => {
                throw Error("No account selected!");
            });
            window.userAddress = selectedAccount;
            await showAddress();
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("No ETH brower extension detected.");
    }
}

async function mint() {
    if (!window.userAddress) {
        return;
    }
    if(!await checkChain()) {
        return;
    }
    if(maxPerWallet == 0) {
        return;
    }
    if(!(wlMintOpen&&isEligibleForWl) && !mintOpen) {
        return;
    }
    const contract = new window.web3.eth.Contract(ABI,CONTRACT_ADDRESS);
    if(wlMintOpen) {
        if(isEligibleForWl) {
            contract.methods.whitelistMint(maxPerWallet, window.proof).send({ from: window.userAddress });
        }        
    } else {
        if(mintOpen) {
            contract.methods.mint(maxPerWallet).send({ from: window.userAddress });        
        }
    }
}

async function checkChain() {
    chainOK = true;
    chainID = await window.web3.eth.net.getId();
    chainOK = chainID == defaultChainId;
    setErrorText(!chainOK, 'Change network to ' + defaultChainName);

    return chainOK;
}

function setErrorText(isError, errorText) {
    if(isError) {
        document.getElementById("errorText").innerHTML = errorText;        
    } else {
        document.getElementById("errorText").innerHTML = '&nbsp;';
    }
}