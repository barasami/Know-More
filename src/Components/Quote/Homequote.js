import React, { useEffect, useState } from 'react'
import { dailyQuotes } from './quote'
import CircularProgress from '@mui/material/CircularProgress';
import './Quote.css'
import { allRandom } from './random';

function Homequote() {
    const[quote,setQuote]=useState(' ')
    const[random,setRandom]=useState([])
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
       setLoading(true)
        dailyQuotes()
        .then(({data})=>{
            setQuote(data)
            setLoading(false)
            
        })
    },[])

    useEffect(()=>{
      allRandom()
      .then(({data})=>{
        setRandom(data)
        
      })

    },[])

    let dayAuthor=quote?.author
    let dayQuote=quote?.quote

    //second quote

    let authorQ=random?.author
    let text=random?.text
  
  return (
    <div className='hquotes'>
      <div className='quotes'>
        {loading ? <CircularProgress color='inherit' className='circular'/> : 
        <div>
          <div className='allfirst'>
            <div className='author'>{dayAuthor}</div>
            <div className='text'>{dayQuote}</div>
          </div>
          <div className='allsecond'>
            <div className='author'>{authorQ}</div>
            <div className='text'>{text}</div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Homequote