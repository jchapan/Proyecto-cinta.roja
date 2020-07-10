import React, {useState, useEffect} from 'react'
import axios from 'axios'

function MyCoins(props) {
    const URL= `https://api.coinlore.net/api/ticker/?id=${props.id}`
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
         <th scope="col-sm-3">{props.name}</th>
         <th scope="col-sm-3">{props.amount}</th>   
         {/* <th scope="col-sm-3">{coins.percent_change_24h}</th> */}
        </>
    )
}

export default MyCoins

