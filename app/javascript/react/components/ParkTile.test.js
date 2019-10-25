import React from "react"
import Enzyme, { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Adapter from "enzyme-adapter-react-16"
import ParkTile from "./ParkTile"
Enzyme.configure({ adapter: new Adapter() })


describe ("ParkTile", () => {
  let wrapper

  beforeEach(() =>{
    wrapper = mount(
      <BrowserRouter>
        <ParkTile
          name="Bryce"
          id="1"
        />
      </BrowserRouter>
    )
  })

  it("should render a link to /parks", () => {
    const link = wrapper.find("Link").first()

    expect(link).toBeDefined()
    expect(link.props()["to"]).toBe("/parks/1")
  })
})
