import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import  React, {useState} from 'react';
import Textform from './components/Textform'; 
import Alert from './components/Alert'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() { 

        const [mode, setMode] = useState('light');
        const [alert, setAlert] = useState(null);

        const showAlert =(mesaage , type )=>{
            setAlert({
                msg : mesaage , 
                type : type
            })
            setTimeout(() => {
                    setAlert(null);
              }  ,3000);
            

        }
        const toggleMode= ()=>{
                if(mode === 'light'){
                setMode('dark');
                document.body.style.background ='#042743';
                showAlert("Dark mode has been enabled" , "success");
                

                }
                else{
                    setMode('light');
                    document.body.style.background ='white';
                    showAlert("Light mode has been enabled" , "success");


                }
        }

       return ( 
        <>
       <Router>
       <Navbar title="UTIL"  hm="HOME"  About=" ABOUT US" mode={mode}  toggleMode={toggleMode} />

            <Alert alert={alert}/>
            <div className="container my=3" >
            <Switch>
                    <Route exact path="/about">
                        <About mode={mode} />
                    </Route>
                    
                    
                    <Route exact path="/">
                    <Textform  showAlert={showAlert} heading ="ENTER YOUR TEXT"  mode={mode} /> 
                        
                    </Route>
            </Switch>
            </div>
        </Router>
        </>

    );
}

export default App;