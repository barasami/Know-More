import React, { useEffect, useState } from 'react'
import { dailyQuotes } from './quote'

function Homequote() {
    const[quote,setQuote]=useState(' ')
    useEffect(()=>{
        dailyQuotes()
        .then((data)=>{
            setQuote(data)
            console.log(data);
        })
    },[])
  return (
    <div>Homequote</div>
  )
}

export default Homequote