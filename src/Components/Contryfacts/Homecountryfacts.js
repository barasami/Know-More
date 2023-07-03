import React, { useEffect, useState } from 'react'
import { defaultCountries } from './contrydata'

function Homecountryfacts() {
    const[country,setCountry]=useState([])
    useEffect(()=>{
        defaultCountries()
        .then(({data})=>{
            setCountry(data)
            console.log(data);
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
        <div>
          {AllcountryData}
        </div>
    </div>
  )
}

export default Homecountryfacts