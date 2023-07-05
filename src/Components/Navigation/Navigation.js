import React from 'react'
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import FactCheckIcon from '@mui/icons-material/FactCheck';
// import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import './Nav.css'

function Navigation() {
  return (
    <div className='nav'>
        <div className='navigation'>
            <div className='links'>
              <Link to='/' className='innerlinks'>daily word</Link>
            </div>
            <div className='links'>
              <Link to='/Countryfact' className='innerlinks'>Country Facts</Link>
            </div>
            <div className='links'>
              <Link to='/Quotes' className='innerlinks'>Daily Quote</Link>
            </div>
        </div>
    </div>
  )
}

export default Navigation