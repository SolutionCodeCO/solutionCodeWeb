import  { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Services from '../pages/Services'
function  RoutesSolutionCode() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/nosotros" element={ <AboutMe />} /> 
          <Route path="/servicios" element = { <Services />} />
        </Routes>
      </BrowserRouter>
    )
}

export default RoutesSolutionCode