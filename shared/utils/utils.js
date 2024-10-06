import { ethers } from "ethers";
import Web3 from "web3";
import { convertFrom18Decimal, convertFrom8Decimal, getLocalStorage, setLocalStorage } from "./helper";
// import stakeABI from "@/data/stakeABI.json";
import contractABI from "@/data/contractABI.json";
// import buyTokenABI from "@/data/buyTokenABI.json";
import coinABI from "@/data/coinABI.json";
// const contractAddress = "0x88FC576e9015fb91c77F4510B56e33E1ACD18D73"
// const stakeAddress = "0x3654D2ba0016E54081769215f7d12b5792591BE4"

// Scroll Smooth Function for Nav Items
export const scrollNavItemSmooth = (e, id) => {
  e.preventDefault()
  document?.querySelector(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}

// MetaMask Connection
export async function connectWallet(setMetamaskAddress) {
  let walletButton = document.getElementsByClassName('walletButton');
  if (typeof window?.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const web3 = new Web3(window.web3.currentProvider);
      const accountResponse = await web3.eth.getAccounts();
      const instance = accountResponse[0];
      walletButton.innerHTML = instance;
      setMetamaskAddress(instance);
      setLocalStorage('metamaskAddress', instance)
      setLocalStorage('web3', web3)
      setLocalStorage('provider', provider)
    } catch (e) {
      console.error(e, 'heya');
    }
  }
};

// Buy tokens with BNB
// export const buyTokenWithBNB = async (contractAddress, amount, referralAddress) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];

//     // Create a contract instance
//     const contract = new web3.eth.Contract(contractAbi, contractAddress);

//     // Your function call
//     const transactionData = await contract.methods.buy(referralAddress).send({
//       from: userAdd, // Replace with the user's Ethereum address
//       value: web3.utils.toWei(amount, 'ether'), // Replace with the amount of BNB you want to send
//       gasPrice: '3000000000',
//       gas: '200000', // Adjust the gas limit as needed
//     });
//     console.log('Transaction successful', transactionData);
//   } catch (error) {
//     console.error('Error buying tokens:', error);
//   }
// };


// Buy tokens with USDT
// export const buyTokenWithUSDT = async (usdtAddress, amount, contractAddress, referralAdd) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];

//     const amountInWei = web3.utils.toWei(amount.toString(), 'ether');
//     // Approve the transfer of USDT to the contract
//     const usdtContract = new web3.eth.Contract(contractAbiUsdt, usdtAddress);
//     // // token balance (usdt)
//     // const balance = await usdtContract.methods.balanceOf(userAdd).call();
//     // // 18 decimals
//     // console.log('Token balance: usdt', balance);
//     const approval = await usdtContract.methods.approve(contractAddress, amountInWei).send({
//       from: userAdd,
//       gasPrice: '3000000000',
//       gas: '200000'
//     });
//     console.log('Approval successful!');

//     // Check if approval was successful before proceeding to buy tokens
//     if (approval.status) {
//       // Buy tokens with the approved USDT
//       const contract = new web3.eth.Contract(contractAbi, contractAddress);
//       const buyTokens = await contract.methods.buyusdt(amountInWei, referralAdd).send({
//         from: userAdd,
//         gasPrice: '3000000000',
//         gas: '200000'
//       });
//       // const buyTokens = await contract.methods.buyusdt(amountInWei, referralAdd).send({ from: userAdd, gas: '1000000' });
//       console.log('Tokens bought successfully', buyTokens);
//     } else {
//       console.error('Approval failed:', approval.transactionHash);
//     }
//   } catch (error) {
//     console.error('Transaction failed:', error);
//   }
// }


// Claim tokens
// export const claimTokens = async () => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];


//     // Create a contract instance
//     const contract = new web3.eth.Contract(contractAbi, contractAddress);

//     // Balance of tokens
//     const balance = await contract.methods.tokenBalance(userAdd).call();
//     console.log('Token balance:', balance);
//     // 8 decimals

//     // Your function call
//     const result = await contract.methods.claimTokens().send({
//       from: userAdd, // Replace with the user's Ethereum address
//     });

//     console.log('Transaction result:', result);
//   } catch (error) {
//     console.error('Error buying tokens:', error);
//   }
// };


// Get Token Balance
export const getBalance = async (usdtAddress, bnbAddress, mdtxAddress, slpAddress, xrpAddress, dogeAddress, axsAddress, manaAddress, shibAddress) => {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(window.ethereum);
    const accountResponse = await web3.eth.getAccounts();
    const userAdd = accountResponse[0];
    let usdtTotalBalance, bnbTotalBalance, claimTotalBalance, mdtx, slp, xrp, doge, mana, axs, shib

    // USDT Balance
    if (usdtAddress) {
      const usdtContract = new web3.eth.Contract(contractABI, usdtAddress);
      const usdtBalance = await usdtContract.methods.balanceOf(userAdd).call();
      let usdtBalanceString = usdtBalance.toString();
      let usdtBalanceNumber = Number(usdtBalanceString);
      usdtTotalBalance = (usdtBalanceNumber / 1e18).toFixed(2);
    }

    // BNB Balance
    if (bnbAddress) {
      const bnbContract = new web3.eth.Contract(coinABI, bnbAddress);
      const bnbBalance = await bnbContract.methods.balanceOf(userAdd).call();
      let bnbBalanceString = bnbBalance.toString();
      let bnbBalanceNumber = Number(bnbBalanceString);
      bnbTotalBalance = (bnbBalanceNumber / 1e8).toFixed(2);
    }

    // // MDTX Balance
    // if (mdtxAddress) {
    //   const mdtxContract = new web3.eth.Contract(coinABI, mdtxAddress);
    //   const mdtxBalance = await mdtxContract.methods.balanceOf(userAdd).call();
    //   let mdtxBalanceString = mdtxBalance.toString();
    //   let mdtxBalanceNumber = Number(mdtxBalanceString);
    //   mdtx = (mdtxBalanceNumber / 1e18).toFixed(2);
    // }

    // // SLP Balance
    // if (slpAddress) {
    //   const slpContract = new web3.eth.Contract(coinABI, slpAddress);
    //   const slpBalance = await slpContract.methods.balanceOf(userAdd).call();
    //   let slpBalanceString = slpBalance.toString();
    //   let slpBalanceNumber = Number(slpBalanceString);
    //   slp = (slpBalanceNumber / 1e18).toFixed(2);
    // }

    // // XRP Balance
    // if (xrpAddress) {
    //   const xrpContract = new web3.eth.Contract(coinABI, xrpAddress);
    //   const xrpBalance = await xrpContract.methods.balanceOf(userAdd).call();
    //   let xrpBalanceString = xrpBalance.toString();
    //   let xrpBalanceNumber = Number(xrpBalanceString);
    //   xrp = (xrpBalanceNumber / 1e18).toFixed(2);
    // }

    // // DOGE Balance
    // if (dogeAddress) {
    //   const dogeContract = new web3.eth.Contract(coinABI, dogeAddress);
    //   const dogeBalance = await dogeContract.methods.balanceOf(userAdd).call();
    //   let dogeBalanceString = dogeBalance.toString();
    //   let dogeBalanceNumber = Number(dogeBalanceString);
    //   doge = (dogeBalanceNumber / 1e8).toFixed(2);
    // }

    // // MANA Balance
    // if (manaAddress) {
    //   const manaContract = new web3.eth.Contract(coinABI, manaAddress);
    //   const manaBalance = await manaContract.methods.balanceOf(userAdd).call();
    //   let manaBalanceString = manaBalance.toString();
    //   let manaBalanceNumber = Number(manaBalanceString);
    //   mana = (manaBalanceNumber / 1e18).toFixed(2);
    // }

    // // AXS Balance
    // if (axsAddress) {
    //   const axsContract = new web3.eth.Contract(coinABI, axsAddress);
    //   const axsBalance = await axsContract.methods.balanceOf(userAdd).call();
    //   let axsBalanceString = axsBalance.toString();
    //   let axsBalanceNumber = Number(axsBalanceString);
    //   axs = (axsBalanceNumber / 1e18).toFixed(2);
    // }

    // // SHIB Balance
    // if (shibAddress) {
    //   const shibContract = new web3.eth.Contract(coinABI, shibAddress);
    //   const shibBalance = await shibContract.methods.balanceOf(userAdd).call();
    //   let shibBalanceString = shibBalance.toString();
    //   let shibBalanceNumber = Number(shibBalanceString);
    //   shib = (shibBalanceNumber / 1e18).toFixed(2);
    // }

    // Total Claimable Balance
    // const contract = new web3.eth.Contract(stakeABI, stakeAddress);
    // const claimBalance = await contract.methods.totalClaimableRewards(userAdd).call()
    // let claimBalanceString = claimBalance.toString();
    // let claimBalanceNumber = Number(claimBalanceString);
    // claimTotalBalance = (claimBalanceNumber / 1e18).toFixed(2);

    return { usdtTotalBalance, bnbTotalBalance, mdtx, slp, xrp, doge, mana, axs, shib}

  } catch (error) {
    console.error('Error getting balance:', error);
  }
}

// getReverseStakeDetails Method

// export const getReverseStakeDetails = async (stakeAddress) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];

//     // Create a contract instance
//     const contract = new web3.eth.Contract(stakeABI, stakeAddress);

//     // Your function call
//     const transactionData = await contract.methods.getReverseStakeDetails(userAdd).call();
//     console.log('Transaction successful stake details', transactionData);
//     return transactionData;
//   } catch (error) {
//     console.error('Error getting reverse stake details:', error);
//   }
// }


// Claim Method

// export const claimMethod = async () => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];

//     // Create a contract instance
//     const contract = new web3.eth.Contract(stakeABI, stakeAddress);

//     // Your function call
//     const transactionData = await contract.methods.claimRewards().send({
//       from: userAdd,
//     });
//     console.log('Claim Transaction successful', transactionData);
//     return transactionData;
//   } catch (error) {
//     console.error('Error claiming tokens:', error);
//   }
// }

// Claim Rewards Method

// export const claimRewardMethod = async (stakeAddress, id) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];

//     // Create a contract instance
//     const contract = new web3.eth.Contract(stakeABI, stakeAddress);

//     // Your function call
//     const transactionData = await contract.methods.claimRewards(id).send({
//       from: userAdd,
//     });
//     console.log('Claim Transaction successful', transactionData);
//     return transactionData;
//   } catch (error) {
//     console.error('Error claiming tokens:', error);
//   }
// }


// Each Reward Method

// export const eachRewardMethod = async (stakeAddress, id) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];

//     // Create a contract instance
//     const contract = new web3.eth.Contract(stakeABI, stakeAddress);

//     // Your function call
//     const transactionData = await contract.methods.eachReward(userAdd, id).call();
//     console.log('Each Reward Transaction successful eachreward', transactionData);
//     return transactionData;
//   } catch (error) {
//     console.error('Error getting each reward:', error);
//   }
// }


// Stake Method

// export const stakeMethod = async (amount, address, referralAddress, tokenType, stakeAddress) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];

//     const amountInWei = web3.utils.toWei(amount.toString(), 'ether');
//     const formattedAmount = tokenType == "CRT" ? amountInWei / 1e10 : amountInWei
//     // Approve the transfer to the contract
//     const usdtContract = new web3.eth.Contract(contractABI, address);
//     const approval = await usdtContract.methods.approve(stakeAddress, formattedAmount).send({
//       from: userAdd,
//       gasPrice: '3000000000',
//       gas: '200000'
//     });
//     if (approval.status) {
//       // Create a contract instance
//       const contract = new web3.eth.Contract(stakeABI, stakeAddress);

//       // Your function call
//       const transactionData = await contract.methods.stake(formattedAmount, referralAddress).send({
//         from: userAdd,
//         gasPrice: '3000000000',
//         gas: '300000',
//       });
//       console.log('Stake Transaction successful', transactionData);
//       return transactionData;
//     }
//     else {
//       console.error('Approval failed:', approval.transactionHash);
//     }
//   } catch (error) {
//     console.error('Error staking CRT:', error);
//   }
// }

// Unstake Method

// export const unStakeMethod = async (stakeAddress, id) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];

//     // Create a contract instance
//     const contract = new web3.eth.Contract(stakeABI, stakeAddress);

//     // Your function call
//     const transactionData = await contract.methods.unStake(id).send({
//       from: userAdd,
//     });
//     console.log('Unstake Transaction successful', transactionData);
//     return transactionData;
//   } catch (error) {
//     console.error('Error unstaking CRT:', error);
//     return "error"
//   }

// }


// Buy CRT

// export const buyCRTMethod = async (amount, USDTAddress) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];

//     const amountInWei = web3.utils.toWei(amount.toString(), 'ether');
//     // Approve the transfer to the contract
//     const usdtContract = new web3.eth.Contract(contractABI, USDTAddress);
//     const approval = await usdtContract.methods.approve(contractAddress, amountInWei).send({
//       from: userAdd,
//       gasPrice: '3000000000',
//       gas: '200000'
//     });
//     console.log('Approval successful!');

//     // Check if approval was successful before proceeding to buy tokens
//     if (approval.status) {
//       // Buy tokens with the approved USDT
//       const contract = new web3.eth.Contract(buyTokenABI, contractAddress);
//       const buyTokens = await contract.methods.buyTokens(amountInWei).send({
//         from: userAdd,
//         gasPrice: '3000000000',
//         gas: '200000'
//       });
//       console.log('Tokens bought successfully', buyTokens);
//       return buyTokens
//     } else {
//       console.error('Approval failed:', approval.transactionHash);
//     }
//   } catch (error) {
//     console.error('Transaction failed:', error);
//   }
// }


// export const swapRate = async (token, swapAdd, swapContractABI) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const tempToken = token?.toLowerCase()
//     let mdtxSwapRate, slpSwapRate

//     if (tempToken == "mdtx") {
//       const mdtxContract = new web3.eth.Contract(swapContractABI, swapAdd);
//       mdtxSwapRate = await mdtxContract.methods.mdtxRate().call();
//     } else if (tempToken == "slp") {
//       const slpContract = new web3.eth.Contract(swapContractABI, swapAdd);
//       slpSwapRate = await slpContract.methods.slpRate().call();
//     } else if (tempToken == "xrp") {
//       const xrpContract = new web3.eth.Contract(swapContractABI, swapAdd);
//       slpSwapRate = await xrpContract.methods.xrpRate().call();
//     } else if (tempToken == "doge") {
//       const dogeContract = new web3.eth.Contract(swapContractABI, swapAdd);
//       slpSwapRate = await dogeContract.methods.dogeRate().call();
//     } else if (tempToken == "axs") {
//       const axsContract = new web3.eth.Contract(swapContractABI, swapAdd);
//       slpSwapRate = await axsContract.methods.axsRate().call();
//       slpSwapRate = Number(slpSwapRate) / 1e3
//     } else if (tempToken == "shib") {
//       const shibContract = new web3.eth.Contract(swapContractABI, swapAdd);
//       slpSwapRate = await shibContract.methods.shibRate().call();
//     } else if (tempToken == "mana") {
//       const manaContract = new web3.eth.Contract(swapContractABI, swapAdd);
//       slpSwapRate = await manaContract.methods.manaRate().call();
//       slpSwapRate = Number(slpSwapRate) / 1e2
//     }

//     const crtContract = new web3.eth.Contract(swapContractABI, swapAdd);
//     const crtSwapRate = await crtContract.methods.crtPerUSDT().call();

//     return { mdtxSwapRate: Number(mdtxSwapRate), crtSwapRate: Number(crtSwapRate), slpSwapRate: Number(slpSwapRate), xrpSwapRate: Number(slpSwapRate), dogeSwapRate: Number(slpSwapRate) }
//   }
//   catch (error) {
//     console.error('Error getting swap rate:', error);
//   }
// }

// export const calculateUsdtMdtx = async (amount, token, swapAdd, swapContractABI) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const tempToken = token?.toLowerCase()
//     let usdt, mdtx, data

//     const contract = new web3.eth.Contract(swapContractABI, swapAdd);
//     if (tempToken == "mdtx") {
//       data = await contract.methods.calculateUsdtmdtx(Math.round(amount * 1e8)).call();
//     } else if (tempToken == "slp") {
//       data = await contract.methods.calculateUsdtslp(Math.round(amount * 1e8)).call();
//     } else if (tempToken == "xrp") {
//       data = await contract.methods.calculateUsdtxrp(Math.round(amount * 1e8)).call();
//     } else if (tempToken == "doge") {
//       data = await contract.methods.calculateUsdtdoge(Math.round(amount * 1e8)).call();
//     } else if (tempToken == "mana") {
//       data = await contract.methods.calculateUsdtmana(Math.round(amount * 1e8)).call();
//     } else if (tempToken == "axs") {
//       data = await contract.methods.calculateUsdtaxs(Math.round(amount * 1e8)).call();
//     } else if (tempToken == "shib") {
//       data = await contract.methods.calculateUsdtshib(Math.round(amount * 1e8)).call();
//     }
//     usdt = convertFrom18Decimal(data[0])
//     if (tempToken == "doge") {
//       mdtx = convertFrom8Decimal(data[1])
//     } else {
//       mdtx = convertFrom18Decimal(data[1])
//     }
//     return { usdt, mdtx }
//   }
//   catch (error) {
//     console.error('Error swapping tokens:', error);
//   }
// }

// export const swapMethod = async (amount, usdtMdtx, usdtAdd, tokenAdd, token, swapAdd, swapContractABI) => {
//   try {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const web3 = new Web3(window.ethereum);
//     const accountResponse = await web3.eth.getAccounts();
//     const userAdd = accountResponse[0];
//     const contractUsdt = new web3.eth.Contract(coinABI, usdtAdd);
//     const contractMdtx = new web3.eth.Contract(coinABI, tokenAdd);

//     const allowanceUSDT = await contractUsdt.methods.allowance(userAdd, swapAdd).call();
//     const allowanceMDTX = await contractMdtx.methods.allowance(userAdd, swapAdd).call();

//     let proceedUsdt = false;
//     let proceedMdtx = false;

//     let approvalUsdt, approvalMdtx;

//     if (allowanceUSDT < usdtMdtx?.usdt * 1e18) {
//       approvalUsdt = await contractUsdt.methods.approve(swapAdd, "115792089237316195423570985008687907853269984665640564039457584007913129639935").send({
//         from: userAdd,
//         gasPrice: '3000000000',
//         gas: '200000'
//       });
//       proceedUsdt = approvalUsdt?.status;
//     }
//     else {
//       proceedUsdt = true;
//     }

//     if (allowanceMDTX < (token == "doge" ? usdtMdtx?.mdtx * 1e8 : usdtMdtx?.mdtx * 1e18)) {
//       approvalMdtx = await contractMdtx.methods.approve(swapAdd, "115792089237316195423570985008687907853269984665640564039457584007913129639935").send({
//         from: userAdd,
//         gasPrice: '3000000000',
//         gas: '200000'
//       });
//       proceedMdtx = approvalMdtx?.status;
//     } else {
//       proceedMdtx = true;
//     }


//     if (proceedUsdt && proceedMdtx) {
//       // Create a contract instance
//       const contract = new web3.eth.Contract(swapContractABI, swapAdd);

//       // Your function call
//       const transactionData = await contract.methods.Swap(amount * 1e8).send({
//         from: userAdd,
//         gasPrice: '3000000000',
//         gas: '500000',
//       });
//       return transactionData;
//     }
//     else {
//       console.error('Approval failed:', approvalUsdt, approvalMdtx);
//     }

//   } catch (error) {
//     console.error('Error swapping tokens:', error);
//   }
// }


// Buy tokens 

export const buyCoinMethod = async (amount, USDTAddress) => {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(window.ethereum);
    const accountResponse = await web3.eth.getAccounts();
    const userAdd = accountResponse[0];

    const amountInWei = web3.utils.toWei(amount.toString(), 'ether');
    // Approve the transfer to the contract
    const usdtContract = new web3.eth.Contract(contractABI, USDTAddress);
    const approval = await usdtContract.methods.approve(contractAddress, amountInWei).send({
      from: userAdd,
      gasPrice: '3000000000',
      gas: '200000'
    });
    console.log('Approval successful!');

    // Check if approval was successful before proceeding to buy tokens
    if (approval.status) {
      // Buy tokens with the approved USDT
      const contract = new web3.eth.Contract(coinABI, contractAddress);
      const buyTokens = await contract.methods.buyTokens(amountInWei).send({
        from: userAdd,
        gasPrice: '3000000000',
        gas: '200000'
      });
      console.log('Tokens bought successfully', buyTokens);
      return buyTokens
    } else {
      console.error('Approval failed:', approval.transactionHash);
    }
  } catch (error) {
    console.error('Transaction failed:', error);
  }
}