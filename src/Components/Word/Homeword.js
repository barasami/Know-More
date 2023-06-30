import React, { useEffect, useState } from 'react'
import { dayWord } from './word'

function Homeword() {
    const[word,setWord]=useState(' ')

    useEffect(()=>{
        dayWord()
        .then(({data})=>{
            setWord(data)
            console.log(data);
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
        <div>
            {allfirst}
        </div>
        <div>
            {allsecond}
        </div>
        <div>
            {allthird}
        </div>
    </div>
  )
}

export default Homeword