import  { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'

function  RoutesSolutionCode() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/nosotros" element={ <AboutMe />} /> 
        </Routes>
      </BrowserRouter>
    )
}

export default RoutesSolutionCode