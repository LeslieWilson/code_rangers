require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:user101) {
    FactoryBot.create(:user)
  }
  let!(:park5) {
    FactoryBot.create(:park, user_id: user101.id)
  }
  let!(:review2) {
    FactoryBot.create(:review, park_id: park5.id, user_id: user101.id)
  }

  describe "POST#create" do
    it "should should sucessfully post a review when all fields are filled in" do
      sign_in user101
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

    it "should should not successfully post when user is not signed in" do
      review2 = { review: {
        rating: "5",
        review_body: "It was awesome!",
        park_id: park5.id
      }}

      post :create, params: {park_id: park5.id, review: review2}, format: :json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 401
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["rating"]).to eq review2[:rating]
      expect(returned_json["review_body"]).to eq review2[:review_body]
    end
  end

  describe "DELETE#destroy" do
    it "should successfully delete a review" do
      sign_in user101

      delete :destroy, params: {park_id: park5.id, review: review2, id: review2.id}, format: :json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["rating"]).to eq nil
      expect(returned_json["review_body"]).to eq nil
    end
  end
end
