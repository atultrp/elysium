import { calculateUsdtMdtx, claimMethod, getBalance, swapRate } from '@/shared/utils/utils'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Web3 from 'web3'

const BuyCard = ({ hideRefferral, buttonText, handleSubmit, token, claim, address, setToast, swaptoken, swapAdd, swapContractABI }) => {

  const [values, setValues] = useState({ referralAdd: "0x4532232D5AdB1f75cab3469Ec4AB836873627721", amount: '' })

  // Get Balance
  const USDTAddress = "0x55d398326f99059fF775485246999027B3197955"
  const CRTAddress = "0x68bc75De88A6209de0b8Be0a6646E3aF616f2e97"
  const mdtxAddress = swaptoken == "mdtx" && "0xE63bFC494982A83388dc49cC10426bBc488d5538"
  const slpAddress = swaptoken == "slp" && "0x070a08BeEF8d36734dD67A491202fF35a6A16d97"
  const xrpAddress = swaptoken == "xrp" && "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE"
  const dogeAddress = swaptoken == "doge" && "0xbA2aE424d960c26247Dd6c32edC70B295c744C43"
  const axsAddress = swaptoken == "axs" && "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0"
  const manaAddress = swaptoken == "mana" && "0x26433c8127d9b4e9B71Eaa15111DF99Ea2EeB2f8"
  const shibAddress = swaptoken == "shib" && "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D"
  const [balance, setBalance] = useState()
  const [currentMetamaskAdd, setCurrentMetamaskAdd] = useState()
  const [inputChangeFlg, setInputChangeFlg] = useState(false)
  const [transactionCount, setTransactionCount] = useState(0)
  const [swapRateData, setSwapRateData] = useState()
  const [usdtMdtx, setUsdtMdtx] = useState()

  useEffect(() => {
    const checkAccountChange = async () => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          window.ethereum.on('accountsChanged', (accounts) => {
            setCurrentMetamaskAdd(accounts[0]);
          });
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          setCurrentMetamaskAdd(accounts[0]);
        } catch (error) {
          console.error(error);
        }
      }
    };

    checkAccountChange();

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners('accountsChanged');
      }
    };
  }, []);

  useEffect(() => {
    getBalance(USDTAddress, CRTAddress, mdtxAddress, slpAddress, xrpAddress, dogeAddress, axsAddress, manaAddress, shibAddress).then((res) => {
      setBalance(res)
    })
      .catch((err) => {
        console.log(err)
      })
  }, [currentMetamaskAdd, transactionCount])


  useEffect(() => {
    swapRate(swaptoken, swapAdd, swapContractABI).then((res) => {
      setSwapRateData(res)
    })
  }, [currentMetamaskAdd])

  return (
    <div className='pb-12 pt-6'>
      <div className='mb-8 border border-[#c63f60] max-w-xl px-5 py-4 space-y-3 rounded-md'>
        <div className='font-medium text-center'>
          AVAILABLE WALLET BALANCE
        </div>
        <div className='flex space-x-2'>
          <span>USDT : </span>
          <span>{balance?.usdtTotalBalance || <div className='w-20 h-5 bg-gray-300 animate-pulse rounded-md mt-1'></div>}</span>
        </div>
        <div className='flex space-x-2'>
          <span>{swaptoken?.toUpperCase()} :</span>
          <span>{balance?.mdtx || balance?.slp || balance?.xrp || balance?.doge || balance?.mana || balance?.axs || balance?.shib || <div className='w-20 h-5 bg-gray-300 animate-pulse rounded-md mt-1'></div>}</span>
        </div>
        <div className='flex space-x-2'>
          <span>CRT :</span>
          <span>{balance?.crtTotalBalance || <div className='w-20 h-5 bg-gray-300 animate-pulse rounded-md mt-1'></div>}</span>
        </div>
      </div>
      {claim && <div className='mb-8 border border-[#c63f60] max-w-xl px-5 py-4 space-y-3 rounded-md'>
        <div className='font-medium text-center'>
          SWAP RATE
        </div>
        <div className='flex space-x-2'>
          <span>CRT : </span>
          <span>{swapRateData?.crtSwapRate || <div className='w-20 h-5 bg-gray-300 animate-pulse rounded-md mt-1'></div>}</span>
        </div>
        <div className='flex space-x-2'>
          <span>USDT : </span>
          <span>1</span>
        </div>
        <div className='flex space-x-2'>
          <span>{swaptoken?.toUpperCase()} : </span>
          <span>{swapRateData?.mdtxSwapRate || swapRateData?.slpSwapRate || <div className='w-20 h-5 bg-gray-300 animate-pulse rounded-md mt-1'></div>}</span>
        </div>
      </div>}
      <div className='flex flex-col border border-[#c63f60] max-w-xl px-5 py-4 space-y-3 rounded-md'>
        <div className='font-medium text-center'>
          SWAP
        </div>
        <label className='w-fit' htmlFor="amount">AMOUNT {token} :</label>
        <input
          name='amount'
          id='amount'
          type="number"
          value={values?.amount}
          placeholder='Enter Amount'
          onChange={(e) => {
            setInputChangeFlg(true)
            setValues({ ...values, amount: e.target.value })
            calculateUsdtMdtx(e.target.value, swaptoken, swapAdd, swapContractABI).then((res) => {
              setUsdtMdtx(res)
            })
          }}
          className='px-3 py-1 border border-[#c63f60] max-w-lg my-3 '
        />
        {inputChangeFlg && <div className='text-red-500 text-sm'>{!values?.amount ? "Please Enter Amount" : !values?.referralAdd && "Please Enter Referral Address"}</div>}

        <div className='flex space-x-2'>
          <span>USDT (70%)  : </span>
          <span>{usdtMdtx?.usdt || 0}</span>
        </div>
        <div className='flex space-x-2'>
          <span>{swaptoken?.toUpperCase()} (30%) : </span>
          <span>{usdtMdtx?.mdtx || 0}</span>
        </div>

        <div className='flex flex-col xxsm:flex-row xxsm:space-x-4'>
          <button
            onClick={() => {
              setTransactionCount(transactionCount + 1)
              if (!values?.amount) {
                setInputChangeFlg(true)
              } else {
                values?.amount && handleSubmit(values, usdtMdtx)
              }
            }}
            className='px-8 py-2 text-white w-full xxsm:w-fit bg-[#c63f60] border border-[#c63f60] hover:bg-white hover:text-[#c63f60] font-normal mt-4'
          >
            {buttonText}
          </button>

        </div>
      </div>
    </div>
  )
}

BuyCard.propTypes = {
  hideRefferral: PropTypes.bool,
  buttonText: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  setToast: PropTypes.func,
}

BuyCard.defaultProps = {
  hideRefferral: false,
  buttonText: 'STAKE',
  handleSubmit: () => { },
  setToast: () => { },
}

export default BuyCard