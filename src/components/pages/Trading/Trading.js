import React, { useState, useEffect } from 'react'
import Cartera from '../Cartera/Cartera'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import './Trading.css'
import axios from 'axios'


function Trading() {
  const [coinSell, setCoinSell] = useState('')
  const [coinBuy, setCoinBuy] = useState('')

  useEffect(()=>{
    getSetCoin()
})
const getSetCoin = ()=>{
  axios.get(`https://apiinfowallet.firebaseio.com/.json`)
      .then((response)=>{
          let amountSellCoin = response.data.amount[0]
          console.log(amountSellCoin)
          setCoinSell(amountSellCoin)
          return amountSellCoin
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
        <div className="card col-sm-6">
          <div className="card-body">
      <h3>Buy / Sell Crypto</h3>
            <form onSubmit = {ejecutar}>
                <label>Select the Coin to Sell</label>
                <select 
                className="form-control" 
                name="coinSell"
                value={coinSell} 
                onChange= {(e)=>{setCoinSell(e.target.value)}}
                >
                    <option value="0" >Select a Coin</option>
                    <option value="BTC">BTC2</option>
                    <option value="ETH">ETH</option>
                    <option value="XRP">XRP</option>
                    <option value="USDT">USDT</option>
                    <option value="BCH">BCH</option>
                </select>
                <span className="input-group-text">{coinSell}</span>
                {/* <input placeholder="Pon un numero" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input> */}
                <br />
            </form>
            </div>
            </div>
            </div>
            <div className="container">
        <div className="card col-sm-6">
          <div className="card-body">
      <h3>Buy / Sell Crypto</h3>
            <form onSubmit = {ejecutar}>

                <div className="from-group">
                <label>Select the Coin to Buy</label>
                <select 
                className="form-control" 
                name="coinBuy"
                value={coinBuy} 
                onChange= {(e)=>{setCoinBuy(e.target.value)}}
                >
                    <option value="0" >Select a Coin</option>
                    <option value="1">BTC</option>
                    <option value="2">ETH</option>
                    <option value="3">XRP</option>
                    <option value="4">USDT</option>
                    <option value="5">BCH</option>
                </select>
                </div>
                <br />
                
            </form>
            </div>
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

