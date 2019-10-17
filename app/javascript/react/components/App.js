import React from 'react'
import IndexPage from "../containers/IndexPage"
import ParkForm from "../containers/ParkForm"

import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/parks" component = {IndexPage}/>
                <Route exact path="/parks/new" component = {ParkForm}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
