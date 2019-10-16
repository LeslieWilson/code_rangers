import React from "react"
import Enzyme, { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import Adapter from "enzyme-adapter-react-16"

import ParkDetailTile from "./ParkDetailTile"

Enzyme.configure({ adapter: new Adapter() })

describe("ParkDetailTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <ParkDetailTile
        id="3"
        location="Alaska"
        description="It is an oh so beautiful National Park. Just gorgeous!"
      />
    )
  })

  it("should render the location of the park on the page", () => {
    expect(wrapper.find('h4').text()).toBe("Location: Alaska")
  })

  it("should render the description of the park on the page", () => {
    expect(wrapper.find('p').text()).toBe("It is an oh so beautiful National Park. Just gorgeous!")
  })
})
