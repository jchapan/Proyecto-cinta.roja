import React, { useState, useEffect } from "react";
// import Header from "../../layout/header/Header";
// import Footer from "../../layout/footer/Footer";
// import GraficaCartera from './GraficaCartera'
import MyCoins from "./MyCoins";

import axios from "axios";

function Cartera() {
  const URL = `https://api.coinlore.net/api/tickers/`;

  const [coins, setCoins] = useState([]);
  const misMonedas = [
    { name: "BTC", id: 90 },
    { name: "ETH", id: 80 },
    { name: "XRP", id: 58 },
    { name: "USDT", id: 518 },
    { name: "BCH", id: 2321 },
  ];

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        let allCoins = response.data.data;
        setCoins(allCoins);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
      <div className="container">
        {/* <GraficaCartera /> */}
        {
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h3>Your Crypto Wallet</h3>

                <table className="table table-striped table-light col-sm-12">
                  <tbody>
                    <tr>
                      <th scope="col-sm-3">Name</th>
                      <th scope="col-sm-1">Amount</th>
                      <th scope="col-sm-1">Change 24H</th>
                      <th scope="col-sm-2">Price</th>
                      <th scope="col-sm-2">Value USD</th>
                    </tr>

                    {misMonedas.map((coin) => {
                      return (
                        <tr>
                          <MyCoins name={coin.name} id={coin.id} />
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default Cartera;
