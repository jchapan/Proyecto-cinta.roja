import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './MyCoins.css'
import WalletInfo from './walletInfo'

function MyCoins(props) {
    const URL= `https://api.coinlore.net/api/ticker/?id=${props.id}`

    const [coins, setCoins] = useState([])
    
    useEffect (()=>{
      axios.get(URL)
      .then((response)=>{
          let allCoins = response.data[0]
          setCoins(allCoins)
        //   console.log(allCoins)
      }) .catch((err)=>{
          console.log(err)
      })
  } , [])



    return (
        <>
         <th scope="col-sm-2">{props.name}</th>
         <th scope="col-sm-2">{
             <WalletInfo moneda = {props.name} />
         }</th>   
         <th scope="col-sm-2">{coins.percent_change_24h +" %"}</th>
         <th scope="col-sm-2">{"$" + new Intl.NumberFormat("en-US").format(coins.price_usd)}</th>
         <th scope="col-sm-2">{"$" + new Intl.NumberFormat("en-US").format(<WalletInfo moneda = {props.name} />*coins.price_usd)}</th>
         {/* <th scope="col-sm-2">{}</th> */}
         <th scope="col-sm-2">Share</th>
        </>
    )
}

export default MyCoins

