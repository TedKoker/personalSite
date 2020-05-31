import React, { useEffect, useState, useCallback } from 'react';
import NavBar from './nav.bar/nav.bar'
import NavBarResponsive from './nav.bar/NavbarResponsive'
import './App.css';
import BasicPage from './pages/basic.page'
import {projectsPage, aboutPage, jobExperiencePage} from './pages/pages.meta'
import {Switch, Route, Redirect} from 'react-router-dom'



function App() {
  const [isResponsive, setResponsive] = useState(window.innerWidth<785)

  const checkResponsive = useCallback(()=> {
    setResponsive(window.innerWidth<785)
  })

  useEffect(()=> {
    window.addEventListener("resize", checkResponsive)

    return ()=>{
      window.removeEventListener("resize", checkResponsive)
    }
  }, [])

  return (
    <div>
      {isResponsive ? <NavBarResponsive/> : <NavBar/>}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/about"/>
        </Route>
        <Route path="/about">
          <BasicPage {...aboutPage}/>
        </Route>
        <Route path="/experience">
          <BasicPage {...jobExperiencePage}/>
        </Route>
        <Route path="/projects">
          <BasicPage {...projectsPage}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
