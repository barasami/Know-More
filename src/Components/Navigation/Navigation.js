import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import './Nav.css'

function Navigation() {
  return (
    <div className='nav'>
        <div className='navigation'>
            <div className='links'>
              <Link to='/' className='innerlinks'><div className='link'>daily word</div><div className='icon'>
              <LanguageIcon/></div></Link>
            </div>
            <div className='links'>
              <Link to='/Countryfact' className='innerlinks'><div className='link'>Country Facts</div><div className='icon'>
                <FactCheckIcon/></div></Link>
            </div>
            <div className='links'>
              <Link to='/Quotes' className='innerlinks'><div className='link'>Daily Quote</div><div className='icon'>
                <FormatQuoteIcon /></div></Link>
            </div>
        </div>
    </div>
  )
}

export default Navigation