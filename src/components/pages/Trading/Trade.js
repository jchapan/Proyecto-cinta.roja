import React, { useState } from 'react'
import axios from 'axios'

function Trade(props) {
    const [precio, setPrecio] = useState('')

    const misMonedas = [
        { name: "BTC", id: 90 },
        { name: "ETH", id: 80 },
        { name: "XRP", id: 58 },
        { name: "USDT", id: 518 },
        { name: "BCH", id: 2321 },
      ];
      const coinSell = props.coinSell
      const a = misMonedas[0].id

    function ejecutar(){
        console.log(props.coinSell)
        console.log(props.amountToSell)
        console.log(a)

        const URLPrecio = `https://api.coinlore.net/api/ticker/?id=${a}`
        axios.get(URLPrecio)
        .then((response)=>{
            let precio = response.data.price_usd
            setPrecio(precio)
        }).catch((err)=>{
            console.log(err)
        })

        const idMoneda = ()=>{
            if(coinSell=="BTC"){
                0
            }else if(coinSell=="ETH"){
                1
            }else if(coinSell=="XRP"){
                2
            }else if(coinSell=="USDT"){
                3
            }else if(coinSell=="BCH"){
                4
            }
        }

        const URLDescontar = `https://apiinfowallet.firebaseio.com/0/coins/${idMoneda}.json`
        axios.patch(URLDescontar,ww)
        .then((response)=>{
            const r = response.data
            console.log('Descontamos')
            console.log(r)
        }).catch((err)=>{
            console.log(err)
        })

        const URL

    }
    return (
        <>
        <button type="submit" className="btn btn-danger" id="trade" onClick={ejecutar}>
          Trade
        </button>  
        </>
    )
}

export default Trade