import React, {useState, useEffect} from 'react'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
// import GraficaCartera from './GraficaCartera'

import axios from 'axios'



function Cartera(porps) {
    const amount = [{"symbol": "BTC", "coinAmount":1},
                   {"symbol": "ETH", "coinAmount":2},
                   {"symbol": "XRP", "coinAmount":3}]
    
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
            <h3>Crypto Currency Info</h3>     
            <table  className="table table-striped table-dark">
                <tbody >
                <tr>
                    <th scope="col-sm-1">Symbol</th>
                    <th scope="col-sm-2">Share</th>
                    <th scope="col-sm-2">Change 24H</th>
                    <th scope="col-sm-2">Price</th>
                    <th scope="col-sm-2">Amount</th>
                </tr>
                {coins.map((coin)=>{
                    return coin.symbol === 'BTC' || coin.symbol === 'ETH' || coin.symbol === 'XRP' ? 
                        <tr>
                        <th scope="col-sm-3">{coin.symbol}</th>
                        <td scope="col-sm-1">Falta Calcular</td>
                        <td scope="col-sm-1">{coin.percent_change_24h + " %"}</td>
                        <td scope="col-sm-2">{"$" + new Intl.NumberFormat("en-US").format(coin.price_usd)}</td>
                        <td scope="col-sm-1"> Falta Amount
                            {
                                // amount.coinAmount
                            }
                        </td>
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
