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


    const AllcountryData=country?.map(({flag,region,name,subregion,population,
      area,borders,capital,callingCodes})=>{

      let bordercountries=borders?.map((data)=>{
        return(
          <div>
            <div>
              {data}
            </div>
          </div>
        )
      })
      let callingcode=callingCodes?.map((data)=>{
        return(
          <div>
            <div>
              {data}
            </div>
          </div>
        )
      })
      let capitalCity=capital?.map((data)=>{
        return(
          <div>
            <div>
              {data}
            </div>
          </div>
        )
      })
      const official=name.official
      const common=name.common
      return(
        <div className='allCountries'>
          <div className='allcountry'>
            <div className='myimg'>
              <img className='img' src={flag} alt={region}/>
            </div>
            <div className='nameclass'>
              <div className='fname'>Official Name <span className='officialname'>{official}</span></div>
              <div className='oname'>Common Name <span className='names'>{common}</span></div>
            </div>
            <div className='capital'>
              <div className='citys'>Capital City <span className='city'>{capitalCity}</span></div>
            </div>
            <div className='regions'>
              <div>Region<span className='region'>{region}</span></div>
              <div>Subregion<span className='region'>{subregion}</span></div>
            </div>
            <div className='areas'>
              <div>Area<span className='area'>{area}</span></div>
            </div>
            <div className='people'>
              <div>Population<span className='population'>{population}</span></div>
            </div>
            <div className='country'>
              <div className='border'>Border Countries <span className='countries'>{bordercountries}</span></div>
            </div>
            <div className='code'>
              <div className='ccode'>Calling Code <span className='calling'>{callingcode}</span></div>
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