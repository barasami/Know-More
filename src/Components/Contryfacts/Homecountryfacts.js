import React, { useEffect, useState } from 'react'
import { defaultCountries } from './contrydata'
import CircularProgress from '@mui/material/CircularProgress';
import './Country.css'

function Homecountryfacts() {
    const[country,setCountry]=useState([])
    const[load,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        defaultCountries()
        .then(({data})=>{
            setCountry(data)
            setLoading(false)
        })
    },[])


    const AllcountryData=country?.map(({flag,region,name})=>{
      const official=name.official
      const common=name.common
      return(
        <div>
          <div>
            <div><img src={flag} alt={region}/></div>
            <div>
              {official} <span>{common}</span>
            </div>
          </div>
        </div>
      )
    })
    
  return (
    <div>
        {load ? <CircularProgress color='inherit' className='circular'/> : 
        <div>
          {AllcountryData}
        </div>
      }
    </div>
  )
}

export default Homecountryfacts