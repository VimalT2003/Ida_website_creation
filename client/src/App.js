// import logo from './logo.svg';
import './App.css';
import NavbarComp from './Components/NavbarComp';
import IDA from './Components/IDA ';
import TimeLine from './Components/TimeLine';
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import Banner from './Components/Banner';
import Services from './Components/Services';
import Footer from './Components/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';


function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ida" element={<IDA/>}/>
        <Route path="/timeline" element={<TimeLine/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/banner" element={<Banner/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/footer" element={<Footer/>}/>
        

        
      </Routes>
    </div>
  );
}

export default App;
