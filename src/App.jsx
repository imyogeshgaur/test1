import React from 'react'
import "./App.css"
import {Route,Switch} from "react-router-dom";
import Home  from  "./Components/Home"
import About  from  "./Components/About"
import Contact  from  "./Components/Contact"
import NavBar  from  "./Components/NavBar"

const App = () => {
  return (
    <>
    <NavBar/>

      <Switch>
      
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          
      </Switch>
      
    </>
  )
}

export default App

