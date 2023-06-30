import React, { useEffect, useState } from 'react'
import { defaultCountries } from './contrydata'

function Homecountryfacts() {
    const[country,setCountry]=useState('')
    useEffect(()=>{
        defaultCountries()
        .then(({data})=>{
            setCountry(data)
            console.log(data);
        })
    },[])

    // const countryNews=country?.map(({unMember,region,independent,landlocked})=>{
    //     return(
    //         <tr>
    //             <td>{region}</td>
    //             <td>{unMember}</td>
    //             <td>{independent}</td>
    //             <td>{landlocked}</td>

    //         </tr>
    //     )
    // })
  return (
    <div>
        <div>
            {/* {countryNews} */}
        </div>
    </div>
  )
}

export default Homecountryfacts