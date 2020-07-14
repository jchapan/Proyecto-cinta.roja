import React, {useState, useEffect} from 'react'
import axios from 'axios'

function CalculaUSD(props) {
    const URLW=`https://apiinfowallet.firebaseio.com/.json`
    const [walletCoins, setWalletCoins] = useState([])

    useEffect (()=>{
        axios.get(URLW)
        .then((response)=>{
            let allWalletCoins = response.data[0].coins
            setWalletCoins(allWalletCoins)
        }) .catch((err)=>{
            console.log(err)
        })
    } , [])
    return (
        <>
        {
            walletCoins.map((cantidad)=>{
                return props.moneda == cantidad.name ?
                "$" + new Intl.NumberFormat("en-US").format(cantidad.amount*props.multiplyBy) :undefined
            })
        } 
        </>
    )
}

export default CalculaUSD
