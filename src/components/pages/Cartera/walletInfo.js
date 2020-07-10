import React, {useState, useEffect} from 'react'
import axios from 'axios'

function WalletInfo(props) {
    const URLW=`https://apicrypto-cinta-roja.firebaseio.com/crypto.json`
    const [walletCoins, setWalletCoins] = useState([])

    useEffect (()=>{
        axios.get(URLW)
        .then((response)=>{
            let allWalletCoins = response.data
            setWalletCoins(allWalletCoins)
            console.log(allWalletCoins)
        }) .catch((err)=>{
            console.log(err)
        })
    } , [])

    return (
        <>
        {
            walletCoins.map((cantidad)=>{
                return props.moneda == cantidad.name ?
                 parseInt(cantidad.amount) :undefined
            })
        }
        </>
    )
}

export default WalletInfo
