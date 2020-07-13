import React, {useState} from 'react'
import axios from 'axios'

function Valida(props) {
  
    const URL=`https://apiinfowallet.firebaseio.com/.json`
    const [valida, setValida] = useState([])
    
        axios.get(URL)
            .then((response)=>{
                let allUsers = response.data
                setValida(allUsers)
                console.log(allUsers)
            }).catch((err)=>{
                console.log(err)
            })



    return (
        <>
        {
            valida.map((user)=>{
                return user.Nombre == props.name && user.Pass == props.pass ?
                alert('Bienvenido') : undefined
            })
        }
        </>
    )
}

export default Valida
