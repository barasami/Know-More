import React, { useEffect, useState } from 'react'
import { dailyQuotes } from './quote'

function Homequote() {
    const[quote,setQuote]=useState(' ')
    useEffect(()=>{
        dailyQuotes()
        .then(({data})=>{
            setQuote(data)
            
        })
    },[])

    let dayAuthor=quote?.author
    let dayQuote=quote?.quote
  
  return (
    <div>
      <div>
        {dayAuthor}
      </div>
      <div>
        {dayQuote}
      </div>
    </div>
  )
}

export default Homequote