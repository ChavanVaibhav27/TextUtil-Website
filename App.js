import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";

import {
  BrowserRouter as Router,

  
} from "react-router-dom";
// import Alert from './components/Alert';


function App() {
  const[mode,setMode]=useState('light');
  // const[alert,setAlert]=useState(null);


  // const ShowAlert=(message)=>{
  //     setAlert({
  //       msg:message,
  //       // Type:type
  //     })
  // }
  

 
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(48 38 86)';
     
      document.title="TextUtils- dark mode";
      // ShowAlert("Dark mode is enable","sucess");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      
      document.title="TextUtils- light mode";
      // ShowAlert("light mode is enable","sucess");
    }
  }

  return (
 <>

<Router>
    <Navbar title="TextUtil" mode={mode} togglemode={togglemode}/>
    {/* <Alert Alert={alert}/> */}
    <div className="container my-3 ">
    <Routes>
          <Route exact path="/about" element={ <About/>}>
         
          </Route> 
          <Route path="/Home" element={<Home heading="Enter a Text to analyse below " 
            mode={mode}/>}>
            {/* <Home heading="Enter a Text to analyse below " 
            mode={mode}/> */}
          </Route>
    </Routes> 
 </div>
 </Router>
 </>
  )
}
  
export default App;

