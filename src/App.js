import React from 'react';
import NavBar from './nav.bar/nav.bar'
import './App.css';
import BasicPage from './pages/basic.page'
import {projectsPage, aboutPage, jobExperiencePage} from './pages/pages.meta'
import {Switch, Route, Redirect} from 'react-router-dom'


function App() {
  return (
    <div>
      <NavBar />
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
