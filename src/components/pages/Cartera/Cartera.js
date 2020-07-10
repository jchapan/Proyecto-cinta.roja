import React, {useState, useEffect} from 'react'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
// import GraficaCartera from './GraficaCartera'
import MyCoins from './MyCoins'

import axios from 'axios'

function Cartera() { 
    const URL=`https://api.coinlore.net/api/tickers/`
    const [coins, setCoins] = useState([])
    const misMonedas=[{"name":"BTC", "amount":2, "id":90},{"name":"ETH", "amount":200, "id":80},{"name":"XRP", "amount":1000, "id":58},{"name":"USDT", "amount":10000, "id":518},{"name":"BCH", "amount":1000, "id":2321}]
    
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
                  
            <table  className="table table-striped table-dark col-sm-12">
                <tbody >
                <tr>
                    <th scope="col-sm-3">Name</th>
                    <th scope="col-sm-1">Amount</th>
                    <th scope="col-sm-1">Change 24H</th>
                    <th scope="col-sm-2">Price</th>
                    <th scope="col-sm-2">Value USD</th>
                    <th scope="col-sm-1">Share</th>
                </tr>

                {
                    misMonedas.map((coin)=>{
                    return <tr><MyCoins 
                    name = {coin.name}
                    amount ={coin.amount}
                    id = {coin.id}
                    /></tr>
                    })
                }


                {/* {
                
                coins.map((coin)=>{
                    return coin.symbol === 'BTC' || coin.symbol === 'ETH' || coin.symbol === 'XRP' || coin.symbol === 'USDT' ? 
                        <tr>
                        <th scope="col-sm-3">{coin.name}</th>
                        <td scope="col-sm-1">Falta Calcular</td>
                        <td scope="col-sm-1">{coin.percent_change_24h + " %"}</td>
                        <td scope="col-sm-2">{"$" + new Intl.NumberFormat("en-US").format(coin.price_usd)}</td>
                        <td scope="col-sm-1">
                            { 
                            // Moneda.value == 1 ?
                            new Intl.NumberFormat("en-US").format(amount/coin.price_btc) +" "+ coin.symbol
                        // : undefined 
                        }
                            </td>
                    </tr> : undefined
                })} */}
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
