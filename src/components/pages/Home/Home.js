import React, { useState, useEffect } from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import TablaCoins from "../TablaCoins/TablaCoins";
import "./Home.css";

import axios from "axios";

function Home() {
  const URL = `https://api.coinlore.net/api/tickers/`;
  const [coins, setCoins] = useState([]);
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
  });
  const [amount, setAmount] = useState(0);
  useEffect(() => {}, [amount]);

  return (
    <>
      <Header />
      <div className="container">
        {
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h3>Crypto Currency Info</h3>
                <div className="input-group md-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text bg-light" for="Moneda">
                      Calc USD
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control col-sm-3 bg-light"
                    placeholder="Amount"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(event) => {
                      setAmount(event.target.value);
                    }}
                  />
                </div>
                <br />
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th className="tituloTabla" scope="col-sm-2">Name</th>
                      <th className="tituloTabla" scope="col-sm-1">Symbol</th>
                      <th className="tituloTabla" scope="col-sm-3">Market Cap</th>
                      <th className="tituloTabla" scope="col-sm-2">Price</th>
                      <th className="tituloTabla" scope="col-sm-1">Change 24H</th>
                      <th className="tituloTabla" scope="col-sm-1">Change 1H</th>
                      <th className="tituloTabla" scope="col-sm-1">Change 7D</th>
                      <th className="tituloTabla" scope="col-sm-1">Total</th>
                    </tr>
                    {coins.map((coin) => {
                      return (
                        <tr>
                          <TablaCoins
                            name={coin.name}
                            symbol={coin.symbol}
                            market={coin.market_cap_usd}
                            price={coin.price_usd}
                            ch24={coin.percent_change_24h}
                            ch1={coin.percent_change_1h}
                            ch7={coin.percent_change_7d}
                            key={coin.id}
                            amount={amount}
                          />
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
      <Footer />
    </>
  );
}

export default Home;
