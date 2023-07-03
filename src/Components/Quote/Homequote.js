import React, { useEffect, useState } from 'react'
import { dailyQuotes } from './quote'
import CircularProgress from '@mui/material/CircularProgress';
import './Quote.css'

function Homequote() {
    const[quote,setQuote]=useState(' ')
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
       setLoading(true)
        dailyQuotes()
        .then(({data})=>{
            setQuote(data)
            setLoading(false)
            
        })
    },[])

    let dayAuthor=quote?.author
    let dayQuote=quote?.quote
  
  return (
    <div className='hquotes'>
      <div className='quotes'>
        {loading ? <CircularProgress color='inherit' className='circular'/> : 
        <div>
          <div>
            {dayAuthor}
          </div>
          <div>
            {dayQuote}
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Homequote