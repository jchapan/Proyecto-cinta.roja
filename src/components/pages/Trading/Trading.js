import React, { useState, useEffect } from 'react'
import Cartera from '../Cartera/Cartera'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import './Trading.css'
import axios from 'axios'


function Trading() {
  const [coinSell, setCoinSell] = useState('')
  const [coinBuy, setCoinBuy] = useState('')
  const [amountSellCoin, setAmountSellCoin] = useState(0)
  const [amountToSell, setAmountToSell] = useState('')

  useEffect(()=>{
    getSetCoin()
},[amountSellCoin])

const getSetCoin = ()=>{
  const URL =`https://apiinfowallet.firebaseio.com/0/coins.json`
  axios.get(URL)
      .then((response)=>{
          let x = response.data
          let r = x.map((cantidad)=>{
              return cantidad.name == coinSell ?
              cantidad.amount : undefined
            })
          setAmountSellCoin(r)
      })
      .catch((error)=>{console.log(error)})
}

  const ejecutar = (event) =>{
    event.preventDefault();
        console.log('Dieron click')
  }
  return (
    <>
    <Header />
    <Cartera />
    <br />
    <div className="container">
      <h3>Buy & Sell Crypto</h3>
      <div className="col-6">
            <form onSubmit = {ejecutar}>
                <label>Select the Coin to Sell</label>
                <select 
                className="form-control" 
                name="coinSell"
                value={coinSell} 
                onChange= {(e)=>{setCoinSell(e.target.value)}}>
                    <option value="0" >Select a Coin</option>
                    <option value="BTC">BTC2</option>
                    <option value="ETH">ETH</option>
                    <option value="XRP">XRP</option>
                    <option value="USDT">USDT</option>
                    <option value="BCH">BCH</option>
                </select>
                <span className="input-group-text">{amountSellCoin}</span>
                <input 
                    className="form-control" 
                    type="number" 
                    placeholder="Amount to sell"
                    value={amountToSell}
                    required
                    onChange= {(e)=>{setAmountToSell(e.target.value)}}
                    />
                <label>Select the Coin to Buy</label>
                <select 
                className="form-control" 
                name="coinBuy"
                value={coinBuy} 
                onChange= {(e)=>{setCoinBuy(e.target.value)}}>
                    <option value="0" >Select a Coin</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="XRP">XRP</option>
                    <option value="USDT">USDT</option>
                    <option value="BCH">BCH</option>
                </select>
                <span className="input-group-text">{coinBuy}</span>
            </form>
            </div>
            </div>
            <br />
            <div className="row justify-content-center">
            <button type="submit" className="btn btn-danger" id="trade">Trade</button>
            </div>
            <br />
    <Footer />
    </>
  )
}

export default Trading

