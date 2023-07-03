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
            console.log(data);
            setLoading(false)
        })
    },[])


    const AllcountryData=country?.map(({flag,region,name,subregion,population,area})=>{
      const official=name.official
      const common=name.common
      return(
        <div >
          <div>
            <div>
              <img className='img' src={flag} alt={region}/>
            </div>
            <div>
              <div>Official Name <span className='names'>{official}</span></div>
              <div>Common Name <span className='names'>{common}</span></div>
            </div>
            <div>
              <div>Region<span className='region'>{region}</span></div>
              <div>Subregion<span className='region'>{subregion}</span></div>
            </div>
            <div>
              <div>Area<span className='area'>{area}</span></div>
            </div>
            <div>
              <div>Population<span className='population'>{population}</span></div>
            </div>
            
            
          </div>
        </div>
      )
    })
    
  return (
    <div className='countryfacts'>
      <div>
        {load ? <CircularProgress color='inherit' className='circular'/> : 
          <div>
            {AllcountryData}
          </div>
        }
      </div>
    </div>
  )
}

export default Homecountryfacts