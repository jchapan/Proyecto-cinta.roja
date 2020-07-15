import React, { useState, useEffect } from "react";
import Cartera from "../Cartera/Cartera";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import "./Trading.css";
import axios from "axios";

function Trading() {
  const [coinSell, setCoinSell] = useState("");
  const [amountSellCoin, setAmountSellCoin] = useState(0);
  const [amountToSell, setAmountToSell] = useState();
  const [IDtoSell, setIDtoSell] = useState(0);

  useEffect(() => {
    getSetCoin();
  }, [amountSellCoin]);

  const getSetCoin = () => {
    const URL = `https://apiinfowallet.firebaseio.com/0/coins.json`;
    axios
      .get(URL)
      .then((response) => {
        let x = response.data;
        let r = x.map((cantidad) => {
          return cantidad.name == coinSell ? cantidad.amount : undefined
        }) 
        setAmountSellCoin(r)
        let i = x.map((w) => {
          return w.name == coinSell ? w.id : undefined;
      })
      setIDtoSell(i)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  const ejecutar = (event) => {
    event.preventDefault();
    if(amountToSell>amountSellCoin){
      alert('Please verify the Amount to sell')
    }else{
      const URLPrecio = `https://api.coinlore.net/api/ticker/?id=${IDtoSell}`
      console.log(URLPrecio)
      axios.get(URLPrecio)
      .then((response)=>{
        let precio = response.data
        console.log(precio)
        const agregar = (precio*amountToSell)+amountSellCoin
        console.log(agregar)
        const URLUSDT = `https://apiinfowallet.firebaseio.com/0/coins/3/amount.json`;
        // axios.patch(URLUSDT, {agregar} )
        // const URLDescontar = `https://apiinfowallet.firebaseio.com/0/coins/${coinSell}/amount.json`
        // const restar = amountSellCoin-amountToSell
        // axios.patch(URLDescontar, {restar})
      }).catch((err)=>{
        console(err)
      })
  }
  };
  
  return (
    <>
      <Header />
      <Cartera />
      <br />

      <h3>Buy & Sell Crypto</h3>
      <div className="container">
        <div className = "row">
        <div className="col-sm-6">
          <form >
            <label>Select the Coin to Sell</label>
            <select
              className="form-control"
              name="coinSell"
              value={coinSell}
              onChange={(e) => {
                setCoinSell(e.target.value);
              }}
            >
              <option value="10">Select a Coin</option>
              <option value="BTC">BTC</option>
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
              onChange={(e) => {
                setAmountToSell(e.target.value);
              }}
            />
          </form>
        </div>
        {/* <div className="col-sm-6">
          <form onSubmit={ejecutar}>
            <label>Convert to USDT</label>
            <span className="input-group-text col-sm-6">USDT</span>
            <span className="input-group-text col-sm-6">{coinBuy}</span>
            <span className="input-group-text col-sm-6">Monto</span>
          </form>
        </div> */}
        </div>
      </div>
      <br />
      <div className="row justify-content-center">
        <button type="submit" className="btn btn-danger" id="trade" onClick={ejecutar}>
          Trade
        </button>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default Trading;
