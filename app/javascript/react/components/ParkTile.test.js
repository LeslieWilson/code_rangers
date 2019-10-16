import React from "react"
import Enzyme, { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import ParkTile from "./ParkTile"

describe ("ParkTile", () => {
    let wrapper

    beforeEach(() =>{
        wrapper = mount(
            <BrowserRouter>
            <ParkTile
            name = "leslie"
            />
            </BrowserRouter>
        )
    })

    it("visitor goes to index page sees a list of parks", () =>{
        expect(wrapper.find("li").text()).toBe("leslie")
    })
})
