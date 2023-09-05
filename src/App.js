// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AlertDis from './components/AlertDis';
// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether Dark Mode is enabled or not
  const [myStyle, setMyStyle] = useState({
    backgroundColor : 'white',
    color: '#495057'
  });

  const [textHand, setTextHand] = useState("black");
  const [success, setSuccess] = useState("success");
  const [warning, setWarning] = useState("warning");
  const [danger, setDanger] = useState("danger");

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  let toggleMode = ()=>{
    setTextHand("")
    if (mode === 'dark'){
      setMode("light");
      document.body.style.background = "white"
      document.body.style.color = "black"
      setMyStyle({
        backgroundColor : 'white',
        color: 'black'
      })
      showAlert("Dark Mode Disabled","success");
    } else{
      setMode("dark");
      document.body.style.background = "radial-gradient(circle at 10% 20%,#343a40 0%,#343a40 90%)"
      document.body.style.color = "white"
      setMyStyle({
        backgroundColor : '#343a40',
        color: 'white'
      })
      showAlert("Dark Mode Enabled","success");
    }
  }

  let handleGreen = ()=>{
    if (mode === 'light'){
      setMode("success");
      setTextHand("white");
      setSuccess("light");
      document.body.style.background = "linear-gradient(to left, rgb(112,224,0), rgb(56,176,0), rgb(0,128,0), rgb(0,114,0))"
      document.body.style.color = "white"
      setMyStyle({
        backgroundColor : "rgb(56,176,0)",
        color: "black"
      })
      showAlert("Theme Applied","success");
    }

    else{
      setMode('light');
      setTextHand("");
      setSuccess("success")
      document.body.style.background = "white";
      document.body.style.color = "black"
      setMyStyle({
        backgroundColor : "white",
        color : "black"
      })
      showAlert("Theme Removed","success");
    }
  }

  let handleOrange = ()=>{
    if (mode === 'light'){
      setMode("warning");
      setTextHand("white");
      setWarning("light");
      document.body.style.background = "linear-gradient(to left, rgb(250,163,7), rgb(244,140,6), rgb(232,93,4)"
      document.body.style.color = "white"
      setMyStyle({
        backgroundColor : "rgb(244,140,6)",
        color: "black"
      })
      showAlert("Theme Applied","success");
    }
    
    else{
      setMode('light');
      setTextHand("");
      setWarning("warning")
      document.body.style.background = "white";
      document.body.style.color = "black"
      setMyStyle({
        backgroundColor : "white",
        color : "black"
      })
      showAlert("Theme Removed","success");
    }
  }


  let handleRed = ()=>{
    if (mode === 'light'){
      setMode("danger");
      setTextHand("white");
      setDanger("light");
      document.body.style.background = "linear-gradient(to left, rgb(255,92,138) 10%, rgb(255,71,126) 20%, rgb(255,10,84) 50%)"
      document.body.style.color = "white"
      setMyStyle({
        backgroundColor : "rgb(255,71,126)",
        color: "black"
      })
      showAlert("Theme Applied","success");
    }
    
    else{
      setMode('light');
      setTextHand("");
      setDanger("danger")
      document.body.style.background = "white";
      document.body.style.color = "black"
      setMyStyle({
        backgroundColor : "white",
        color : "black"
      })
      showAlert("Theme Removed","success");
    }
  }
  
  return (
    <>
    {/* <BrowserRouter> */}

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} textHand={textHand} green={handleGreen} orange={handleOrange} red={handleRed} success={success} warning={warning} danger={danger} />
      <AlertDis alert={alert} />
      <TextForm heading="Text Analyzer" myStyle={myStyle} showAlert={showAlert} />
      {/* <div className="container my-3">
        <Routes>
              <Route exact path="/about" element={<About myStyle={myStyle} />}>           
              </Route>
              
              <Route exact path="/" element={<TextForm heading="Text Analyzer" myStyle={myStyle} showAlert={showAlert} />}>
              </Route>
        </Routes>
      </div>
       */}
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
