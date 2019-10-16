import React from "react"
import Enzyme, { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import Adapter from "enzyme-adapter-react-16"

import ParkShowContainer from "./ParkShowContainer"

Enzyme.configure({ adapter: new Adapter() })

describe("ParkShowContainer", () => {
  let wrapper

  let data = [
    {
      id: 3,
      name: "Denali",
      location: "Alaska",
      description: "It is an oh so beautiful National Park. Just gorgeous!"
    }
  ]

  beforeEach(() => {
    wrapper = mount(
      <ParkShowContainer
        data={data}
      />
    )
  })

  it("should render the name of the park on the page", () => {
    expect(wrapper.find('p').text()).toBe("Denali")
  })

  it("should render the location of the park on the page", () => {
    expect(wrapper.find('p').text()).toBe("Alaska")
  })

  it("should render the description of the park on the page", () => {
    expect(wrapper.find('p').text()).toBe("It is an oh so beautiful National Park. Just gorgeous!")
  })
})
