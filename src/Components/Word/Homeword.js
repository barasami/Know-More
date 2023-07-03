import React, { useEffect, useState } from 'react'
import { dayWord } from './word'
import './Word.css'

import CircularProgress from '@mui/material/CircularProgress';


function Homeword() {
    const[word,setWord]=useState(' ')
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        dayWord()
        .then(({data})=>{
            setWord(data)
            setLoading(false);
        })
    },[])

    let words=Object.entries(word || {})
    let first=Object.values(words[1] || {})

    let second=Object.values(words[2] || {})

    let third=Object.values(words[3] || {})


    //first
    let allfirst=first?.map(({date,word,mean,source,id})=>{
        return(
            <div key={id}>
                <div>{date}</div>
                <div>{source}</div>
                <div>{word}</div>
                <div>{mean}</div>

            </div>
        )
    })

    //second
    let allsecond=second?.map(({date,word,mean,source})=>{
        return(
            <div key={mean}>
                <div>{date}</div>
                <div>{source}</div>
                <div>{word}</div>
                <div>{mean}</div>

            </div>
        )
    })

    //third

    let allthird=third?.map(({date,word,mean,source})=>{
        return(
            <div key={mean}>
                <div>{date}</div>
                <div>{source}</div>
                <div>{word}</div>
                <div>{mean}</div>

            </div>
        )
    })
  return (
    <div>
        {loading ? <CircularProgress className='circular' color='inherit'/> : 
        <div>
            <div>
                {allfirst}
            </div>
            <div>
                {allsecond}
            </div>
            <div>
                {allthird}
            </div>
            
        </div>}
    </div>
  )
}

export default Homeword