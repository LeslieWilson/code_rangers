require 'rails_helper'

RSpec.describe Api::V1::ParksController, type: :controller do
  let!(:park1) {
    FactoryBot.create(:park)
  }
  let!(:park2) {
    FactoryBot.create(:park)
  }
  let!(:review1) {
    FactoryBot.create(:review, park: park1)
  }

  describe "GET#index" do
    it "should return a list of the parks" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1

      expect(returned_json["parks"][0]["name"]).to eq park1.name
      expect(returned_json["parks"][1]["name"]).to eq park2.name
    end
  end

  describe "GET#show" do
    it "should return a parks name, location, description, and its reviews" do

      get :show, params: {id: park1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2
      expect(returned_json["park"]["name"]).to eq park1.name
      expect(returned_json["park"]["location"]).to eq park1.location
      expect(returned_json["park"]["description"]).to eq park1.description

      expect(returned_json["reviews"][0]["rating"]).to eq review1.rating
      expect(returned_json["reviews"][0]["review_body"]).to eq review1.review_body
    end
  end

  describe "POST#create" do
    it "should should sucessfully post when all fields are filled in" do
      user = FactoryBot.create(:user)
      sign_in user
      park3 = { park: {
        name: 'Example Park',
        location: 'Boston',
        description: 'Pahk yuh cah in the Bahstan pahk'
        }
      }

      post :create, :params => park3, format: :json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)

      expect(returned_json["name"]).to eq park3[:name]
      expect(returned_json["location"]).to eq park3[:location]
      expect(returned_json["description"]).to eq park3[:description]
    end

    it "should should return errors when filled out incorrectly" do
      user = FactoryBot.create(:user)
      sign_in user
      park4 = { park: {
        name: "",
        location: "",
        description: "",
        image: ""
        }
      }

      post :create, :params => park4, format: :json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["name"]).to eq park4["can't be blank"]
      expect(returned_json["location"]).to eq park4["can't be blank"]
      expect(returned_json["description"]).to eq park4["can't be blank"]
      expect(returned_json["user"]).to eq("You must be signed in to add a new park!")
    end
  end
end
