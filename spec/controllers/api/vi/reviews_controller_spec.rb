require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:first_park) {Park.create(
    name: "leslie",
    location: "montana",
    description: "old faithful",
    image: "hello picture",
  )}

  let!(:first_review) {Review.create(
    rating: "5",
    review_body: "It was awesome!"
  )}

describe "POST#create" do
  it "should should sucessfully post a review when all fields are filled in" do
    sample_review = { review: {
      rating: "5",
      review_body: "It was awesome!"
    }}

    post :create, :params => sample_review, format: :json
    returned_json = JSON.parse(response.body)
    expect(response.status).to eq 200
    expect(response.content_type).to eq("application/json")

    expect(returned_json).to be_kind_of(Hash)
    expect(returned_json).to_not be_kind_of(Array)
    expect(returned_json["rating"]).to eq sample_review[:rating]
    expect(returned_json["review_body"]).to eq sample_review[:review_body]
  end
end
end
