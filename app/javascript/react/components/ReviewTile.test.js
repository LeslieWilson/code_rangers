import React from "react"
import Enzyme, { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import Adapter from "enzyme-adapter-react-16"
import ReviewTile from "./ReviewTile"

Enzyme.configure({ adapter: new Adapter() })

describe("ReviewTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        rating="3"
        reviewBody="It was pretty nice. I've seen better, I've seen worse."
        parkId="2"
      />
    )
  })

  it("should render the review_body of the review park on the page", () => {
    expect(wrapper.find('#review-body').text()).toBe("Review:  It was pretty nice. I've seen better, I've seen worse.")
  })
})
