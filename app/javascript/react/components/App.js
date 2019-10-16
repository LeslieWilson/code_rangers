import React from 'react'

import IndexPage from "../containers/IndexPage"
import ParkShowContainer from "../containers/ParkShowContainer"

import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = (props) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {IndexPage}/>
        <Route exact path="/parks" component = {IndexPage}/>
        <Route exact path="/parks/:id" component = {ParkShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
