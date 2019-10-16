import React from 'react'

import IndexPage from "../containers/IndexPage"

import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/parks" component = {IndexPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
