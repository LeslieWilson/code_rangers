require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:park5) {
    FactoryBot.create(:park)
    }

  describe "POST#create" do
    it "should should sucessfully post a review when all fields are filled in" do
      review2 = { review: {
        rating: "5",
        review_body: "It was awesome!",
        park_id: park5.id
      }}

      post :create, params: {park_id: park5.id, review: review2}, format: :json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["rating"]).to eq review2[:rating]
      expect(returned_json["review_body"]).to eq review2[:review_body]
    end
  end
end
