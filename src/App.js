import React from 'react'
import './App.css'
import Home from './pages/Home'
import Category from './pages/Category'
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HeaderCategoryList from './containers/headerCategoryList'
import HeaderLogo from './components/headerLogo'

function App() {
  return (
    <div className="App">
      <HeaderLogo/>
      <Router>
          <Switch>
            <Route exact path="/">
              <HeaderCategoryList />
              <Home />
            </Route>
            <Route exact path="/:categoryId">
              <HeaderCategoryList />
              <Category/>
            </Route>
            <Route exact path="/loved">
              <HeaderCategoryList />
              <Category/>
            </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App
