import React, {useState, useEffect} from 'react'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
// import GraficaCartera from './GraficaCartera'

import axios from 'axios'

function Cartera() { 
    const URL=`https://api.coinlore.net/api/tickers/`
    const [coins, setCoins] = useState([])
    
    useEffect (()=>{
      axios.get(URL)
      .then((response)=>{
          let allCoins = response.data.data
          setCoins(allCoins)
          console.log(allCoins)
      }) .catch((err)=>{
          console.log(err)
      })
  } , [])

  return (
    <>
      <Header />
      <div className="container">
          {/* <GraficaCartera /> */}
    {
    <div className="col-sm-12">
    <div className="card">
        <div className="card-body">
            <h3>Your Crypto</h3>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                 <span className="input-group-text" id="basic-addon1">BTC</span>
                </div>
                <input type="text" className="form-control" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1" onChange/>
                <div className="input-group-prepend">
                 <span className="input-group-text" id="basic-addon1">ETH</span>
                </div>
                <input type="text" className="form-control" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1" />
                <div className="input-group-prepend">
                 <span className="input-group-text" id="basic-addon1">XRP</span>
                </div>
                <input type="text" className="form-control" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1" />
                <div className="input-group-prepend">
                 <span className="input-group-text" id="basic-addon1">USDT</span>
                </div>
                <input type="text" className="form-control" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1" />
            </div>    
            <table  className="table table-striped table-dark col-sm-12">
                <tbody >
                <tr>
                    <th scope="col-sm-3">Symbol</th>
                    <th scope="col-sm-1">Share</th>
                    <th scope="col-sm-1">Change 24H</th>
                    <th scope="col-sm-2">Price</th>
                    <th scope="col-sm-1">Amount</th>
                </tr>
                {
                
                coins.map((coin)=>{
                    return coin.symbol === 'BTC' || coin.symbol === 'ETH' || coin.symbol === 'XRP' || coin.symbol === 'USDT' ? 
                        <tr>
                        <th scope="col-sm-3">{coin.symbol}</th>
                        <td scope="col-sm-1">Falta Calcular</td>
                        <td scope="col-sm-1">{coin.percent_change_24h + " %"}</td>
                        <td scope="col-sm-2">{"$" + new Intl.NumberFormat("en-US").format(coin.price_usd)}</td>
                        <td scope="col-sm-1"><Precio /></td>
                    </tr> : undefined
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
)

}

export default Cartera
