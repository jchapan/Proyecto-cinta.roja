import React from 'react'

function TablaCoins(props) {
    return (
        <>
        <th scope="col-sm-3">{props.name}</th>
        <td scope="col-sm-1">{props.symbol}</td>
        <td scope="col-sm-3">{"$" + new Intl.NumberFormat("en-US").format(props.market)}</td>
        <td scope="col-sm-2">{"$" + new Intl.NumberFormat("en-US").format(props.price)}</td>
        <td scope="col-sm-1">{props.ch24 + " %"}</td>
        <td scope="col-sm-1">{props.ch1 + " %"}</td>
        <td scope="col-sm-1">{props.ch7 + " %"}</td>
        </>
    )
}

export default TablaCoins
