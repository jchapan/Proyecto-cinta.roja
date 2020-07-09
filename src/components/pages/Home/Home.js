import React from 'react'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import axios from 'axios'

const API_KEY = 'xxx'
const API_SECRET = 'xxx'

function Home() {
    const URL=`https://api.binance.com/?api_key=${API_KEY}`
    return (
        <>
          <Header />
          <h2>Titulo</h2>
          <Footer />  
        </>
    )
}

export default Home
