import './App.css';
import { Route,Routes } from 'react-router-dom';
import Law from './components/Law';
import MyNav from './components/MyNav';
import Services from './components/Services';
import Contact from './components/Contact';
import MyChatbot from './components/chatB/Chat1';
import About from './components/About';
import LawTypes from './keywords/LawTypes';
import Constitution from './keywords/lawtypes/Constitution';
import Civil from './keywords/lawtypes/Civil';
import Corporate from './keywords/lawtypes/Corporate';
import Criminal from './keywords/lawtypes/Criminal';
import Cyber from './keywords/lawtypes/Cyber';
import Environmental from './keywords/lawtypes/Environmental';
import Family from './keywords/lawtypes/Family';
import Intellectual from './keywords/lawtypes/Intellectual';
import Labor from './keywords/lawtypes/Labor';
import Tax from './keywords/lawtypes/Tax';
import Login from './components/RegisterPages/Login';
function App() {
  return (
    <div className="App">

      <MyNav/>
      
      <Routes>
        
         <Route path='/' element={ <Law/> }/> 
        
         <Route path='/about' element={ <About/> }/>  
         <Route path='/serv' element={ <Services/> }/> 
         <Route path='/contact' element={ <Contact/> }/> 
          <Route path='/chatbot' element={<MyChatbot/>}/>
          

          <Route path='/login'element={<Login/>}/>

          <Route path='/laws' element={ <LawTypes/>}/>
          <Route path='/constitution' element={<Constitution/>}/>
          <Route path='/civil' element={ <Civil/>}/>
          <Route path='/corporate' element={<Corporate/>}/>
          <Route path='/criminal' element={ <Criminal/>}/>
          <Route path='/cyber' element={ <Cyber/>}/>
          <Route path='/environmental' element={ <Environmental/>}/>
          <Route path='/family' element={ <Family/>}/>
          <Route path='/intellectual' element={<Intellectual/>}/>
          <Route path='/labor' element={ <Labor/>}/>
          <Route path='/tax' element={ <Tax/>}/>
         
      </Routes>

    </div>
  );
}

export default App;