import React, { useState } from 'react'
import Cartera from '../Cartera/Cartera'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import './Trading.css'

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
    <br />
    <div className="container">
      <div className="col-sm-6">
        <div className="card">
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
                    <option value="1">BTC</option>
                    <option value="2">ETH</option>
                    <option value="3">XRP</option>
                    <option value="4">USDT</option>
                    <option value="5">BCH</option>
                </select>
                <br />
            </form>
            </div>
            </div>
            </div>
            <div className="container"></div>
      <div className="col-sm-6">
        <div className="card">
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

