import React, {useState, useEffect} from 'react'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import { useHistory } from "react-router-dom"
import axios from 'axios'


function Validation() {
    const URL=`https://apiinfowallet.firebaseio.com/0/2FA.json`
    const [code, setCode] = useState()

    const ejecutar = (event)=>{
        event.preventDefault();
        axios.get(URL)
        .then((response)=>{
            let r = response.data
            console.log(r)
            return r == code ?
             handleClick() 
            : alert('Please verify the security code')
        }).catch((err)=>{
            console.log(err)
            
        })
    }

    const history = useHistory();

    function handleClick() {
        history.push("/wallet");
    }

    return (
        <>
        <Header />
        <div className="container">
        <form onSubmit = {ejecutar}>
            <input 
            className="form-control" 
            type="number" 
            placeholder="Insert the Security Code"
            value={code}
            required
            onChange= {(e)=>{setCode(e.target.value)}}
            />
            <button type="submit" className="btn btn-danger">Validate</button>
            </form>
            </div>
           <Footer /> 
        </>
    )
}

export default Validation
