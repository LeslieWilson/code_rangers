import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import IndexPage from "../containers/IndexPage"
import ParkShowContainer from "../containers/ParkShowContainer"
import ParkForm from "../containers/ParkForm"

const App = (props) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {IndexPage}/>
        <Route exact path="/parks" component = {IndexPage}/>
        <Route exact path="/parks/new" component = {ParkForm}/>
        <Route exact path="/parks/:id" component = {ParkShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
