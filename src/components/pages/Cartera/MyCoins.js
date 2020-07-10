import React from 'react'

function MyCoins(props) {
    

    return (
        <>
         <th scope="col-sm-3">{props.name}</th>
         <th scope="col-sm-3">{props.amount}</th>   
        </>
    )
}

export default MyCoins

