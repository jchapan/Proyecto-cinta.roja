import React, { useState } from 'react'
import Cartera from '../Cartera/Cartera'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'

function Trading() {
  const [coinSell, setCoinSell] = useState('')
  const [coinBuy, setCoinBuy] = useState('')

  const ejecutar = (event) =>{
    event.preventDefault();
        console.log('Dieron click')
  }
  return (
    <>
    <Header />
    <Cartera />
      <h3>Buy / Sell Crypto</h3>
        <div className="container">
          <div className="row">
            <form onSubmit = {ejecutar}>
                <div className="from-group col-sm-6">
                <label>Select the Coin to Sell</label>
                <select 
                className="form-control" 
                name="coinSell"
                value={coinSell} 
                onChange= {(e)=>{setCoinSell(e.target.value)}}
                >
                    <option value="0" >Select a Coin</option>
                    <option value="1">BTC</option>
                    <option value="2">ETH</option>
                    <option value="3">XRP</option>
                    <option value="4">USDT</option>
                    <option value="5">BCH</option>
                </select>
                </div>
                <div className="from-group col-sm-6">
                <label>Select the Coin to coinBuy</label>
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
                <button type="submit" className="btn btn-danger">Trade</button>
            </form>
            </div>
            </div>
    <Footer />
    </>
  )
}

export default Trading

