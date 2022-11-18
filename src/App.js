
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {  Routes, Route } from 'react-router-dom';



function App() {
 
  // eslint-disable-next-line
  const[mode,setMode] = useState('light');

  const[alert,setAlert] =useState(null);
  
  const showAlert= (message, type)=>{
    setAlert({
        msg: message ,
        type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode= ()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ="rgb(56, 56, 56)";
      document.body.style.color = "white"
      showAlert("Dark mode has been enabled" , "success")
      document.title="myText- Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ="white";
      document.body.style.color = "black"
      showAlert("Light mode has been enabled" , "success")
      document.title="myText- Light Mode"
    }
  }
    
    
  
    return (
    <>
      
      <Navbar title="myText" navcomp1= "Home" navcomp2= "About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
      <TextForm showAlert={showAlert} heading="Enter your text to analyze"/>
      {/* // <Routes>
      //   <Route path='/' element={}/>
      //   <Route path='/about' element={<About />} />       
      // </Routes> */}
      </div>
      
    </>
  );
}


export default App;
