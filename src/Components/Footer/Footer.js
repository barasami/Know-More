import React from 'react'
import './Footer.css'

function Footer() {
    const year=new Date().getFullYear()
  return (
    <div className='footer'>
        <div  className='paragraph'>
          <p className='copy'>&copy;KnowFacts{year}all rights reserved</p>
        </div>
    </div>
  )
}

export default Footer