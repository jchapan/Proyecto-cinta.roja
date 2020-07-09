import React, {useState, useEffect} from 'react'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'

import axios from 'axios'

function Trading() {
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
        <h2></h2>
        <div className="container">
        <div className="input-group mb-2">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
        </div>
        <select className="custom-select col-sm-2" id="inputGroupSelect01">
          <option selected>Choose</option>
          <option value={1}>BTC</option>
          <option value={2}>ETH</option>
          <option value={3}>XRP</option>
        </select>
      </div>
      </div>
      <Footer />
        </>
    )
}

export default Trading
