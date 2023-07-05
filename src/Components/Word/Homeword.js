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
    let allfirst=first?.map(({date,word,mean,id})=>{
        return(
            <div key={id}>
                <div className='date'>{date}</div>
                <div className='word'>{word}</div>
                <div className='mean'>{mean}</div>

            </div>
        )
    })

    //second
    let allsecond=second?.map(({date,word,mean})=>{
        return(
            <div key={mean}>
                <div className='date'>{date}</div>
                <div className='word'>{word}</div>
                <div className='mean'>{mean}</div>

            </div>
        )
    })

    //third

    let allthird=third?.map(({date,word,mean})=>{
        return(
            <div key={mean}>
                <div className='date'>{date}</div>
                <div className='word'>{word}</div>
                <div className='mean'>{mean}</div>

            </div>
        )
    })
  return (
    <div className='hword'>
       <div className='word'>
            {loading ? <CircularProgress className='circular' color='inherit'/> : 
                <div>
                    <div className='first'>
                        {allfirst}
                    </div>
                    <div className='second'>
                        {allsecond}
                    </div>
                    <div className='third'>
                        {allthird}
                    </div>
                    
                </div>}
       </div>
    </div>
  )
}

export default Homeword