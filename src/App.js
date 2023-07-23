import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
 import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode is Enabled", "success");
      document.title = 'TextUtils-DarkMode';
      // it is used for alert mssg on site at the top of title
      // setInterval(()=>{
      //   document.title='TextUtils-is amazing';


      // },2000)
      // setInterval(()=>{
      //   document.title=' install TextUtils now';


      // },1500)
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
      document.title = 'TextUtils-LightMode';
    }
  };

  return (
    <>
   
      <Router>
        <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze Below" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;