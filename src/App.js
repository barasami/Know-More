import './App.css';
import Homeword from './Components/Word/Homeword';
import Homequote from './Components/Quote/Homequote';
import Homecountryfacts from './Components/Contryfacts/Homecountryfacts';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
     <Fragment>
      <Navigation/>
      <Routes>
        <Route path='/Dayword' element={<Homeword/>}/>
        <Route path='/Quotes' element={<Homequote/>}/>
        <Route path='/Countryfact'element={<Homecountryfacts/>}/>
      </Routes>
      <Footer/>
     </Fragment>
    </Router>
  );
}

export default App;
