import React, { useState, useEffect } from "react";
import Cartera from "../Cartera/Cartera";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
// import Trade from "./Trade"
import "./Trading.css";
import axios from "axios";

function Trading() {
  const [coinSell, setCoinSell] = useState("");
  const [amountSellCoin, setAmountSellCoin] = useState(0);
  const [amountToSell, setAmountToSell] = useState();

  useEffect(() => {
    getSetCoin();
  }, [amountToSell, amountSellCoin]);

  const getSetCoin = () => {
    const URL = `https://apiinfowallet.firebaseio.com/0/coins.json`;
    axios
      .get(URL)
      .then((response) => {
        let x = response.data;
        let r = x.map((cantidad) => {
          return cantidad.name === coinSell ? cantidad.amount : undefined
        }) 
        setAmountSellCoin(r)
      })
      .catch((error) => {
        console.log(error);
      });
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
          <form>
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
        </div>
      </div>
      <br />
      <div className="row justify-content-center">
      {/* <Trade coinSell={coinSell} amountToSell={amountToSell} /> */}
      </div>
      <br />
      <Footer />
    </>
  );
}

export default Trading;
