import React, { useEffect, useState, useCallback } from 'react';
import NavBar from './nav.bar/nav.bar'
import NavBarResponsive from './nav.bar/NavbarResponsive'
import './App.css';
import BasicPage from './pages/basic.page'
import {projectsPage, aboutPage, jobExperiencePage} from './pages/pages.meta'
import {Switch, Route, Redirect} from 'react-router-dom'
import {startHandler, endHandler, handleTouches} from './Shared/swipe-menu'

function App() {
  /**
   * To Do:
   * ---------
   * 1) add gradual closure to swipe event
   * 2) test swiping events in defferent screen sizes
   *      Try to cinsider the difference between screenX and clientX in the event.
   *      in the phone it works ok, but not in the computer
   * 3) deploy
   */
  const [isResponsive, setResponsive] = useState(window.innerWidth<785)

  const checkResponsive = useCallback(()=> {
    setResponsive(window.innerWidth<785)
  })

  useEffect(()=> {
    window.addEventListener("resize", checkResponsive)
    window.addEventListener("touchstart", startHandler, false)
    window.addEventListener("touchmove", handleTouches, false)
    window.addEventListener("touchend", endHandler, false)

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
