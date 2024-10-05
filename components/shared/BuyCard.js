import { claimMethod, getBalance } from '@/shared/utils/utils'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Web3 from 'web3'
import Button from './Button'

const BuyCard = ({ hideRefferral, buttonText, handleSubmit, token, claim, address, setToast }) => {

  const [values, setValues] = useState({ referralAdd: "0x4532232D5AdB1f75cab3469Ec4AB836873627721", amount: '' })

  // Get Balance
  const USDTAddress = "0x55d398326f99059fF775485246999027B3197955"
  const CRTAddress = "0x68bc75De88A6209de0b8Be0a6646E3aF616f2e97"
  const [balance, setBalance] = useState()
  const [currentMetamaskAdd, setCurrentMetamaskAdd] = useState()
  const [inputChangeFlg, setInputChangeFlg] = useState(false)
  const [transactionCount, setTransactionCount] = useState(0)


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

  // useEffect(() => {
  //   getBalance(USDTAddress, CRTAddress).then((res) => {
  //     setBalance(res)
  //   })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [currentMetamaskAdd, transactionCount])

  return (
    <div className='py-12'>
      <div className='flex flex-col border border-[#002859] max-w-xl px-5 py-4 space-y-3 rounded-md mx-auto'>
        <label className='w-fit' htmlFor="amount">AMOUNT USDT</label>
        <input
          name='amount'
          id='amount'
          type="number"
          value={values?.amount}
          placeholder='Enter Amount'
          onChange={(e) => {
            setInputChangeFlg(true)
            setValues({ ...values, amount: e.target.value })
          }}
          className='px-3 py-1 border rounded-md border-[#002859] max-w-lg my-3 '
        />

        {inputChangeFlg && <div className='text-red-500 text-sm'>{!values?.amount ? "Please Enter Amount" : !values?.referralAdd && "Please Enter Referral Address"}</div>}

        <div className='flex flex-col xxsm:flex-row xxsm:space-x-4'>
          <Button
            radius={"rounded-md"}
            classes={"!w-32 mt-3"}
            onClick={() => {
              setTransactionCount(transactionCount + 1)
              if (!values?.amount || !values?.referralAdd) {
                setInputChangeFlg(true)
              }
              if (!hideRefferral) {
                values?.amount && values?.referralAdd && handleSubmit(values)
              }
              else {
                values?.amount && handleSubmit(values)
              }
            }}
          >
            <span className={"font-medium uppercase"}>
              Buy
            </span>
          </Button>

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