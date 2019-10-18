require 'rails_helper'

RSpec.describe Api::V1::ParksController, type: :controller do
  let!(:first_park) {Park.create(
    name: "leslie",
    location: "montana",
    description: "old faithful",
    image: "hello picture",
    id: "1"
  )}

  let!(:second_park) {Park.create(
    name: "denali",
    location: "alaska",
    description: "really snowy",
    image: "hello pic2",
    id: "2"
  )}

  let!(:first_review) {Review.create(
    rating: "3",
    review_body: "It was the bestest!",
    park_id: "1"
  )}


  describe "GET#index" do
    it "should return a list of the parks" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2
      expect(returned_json[0]["name"]).to eq "leslie"
      expect(returned_json[0]["location"]).to eq "montana"
      expect(returned_json[0]["description"]).to eq "old faithful"
      expect(returned_json[0]["image"]).to eq "hello picture"

      expect(returned_json[1]["name"]).to eq "denali"
      expect(returned_json[1]["location"]).to eq "alaska"
      expect(returned_json[1]["description"]).to eq "really snowey"
      expect(returned_json[1]["image"]).to eq "hello pic2"
    end
  end

  describe "GET#show" do
    it "should return a parks name, location, description, and image" do
      get :show, params: {id: first_park.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2
      expect(returned_json["park"]["name"]).to eq "leslie"
      expect(returned_json["park"]["location"]).to eq "montana"
      expect(returned_json["park"]["description"]).to eq "old faithful"
      expect(returned_json["park"]["image"]).to eq "hello picture"

      expect(returned_json["reviews"][0]["rating"]).to eq "3"
      expect(returned_json["reviews"][0]["review_body"]).to eq "It was the bestest!"
    end
  end

  describe "POST#create" do
    it "should should sucessfully post when all fields are filled in" do
      sample_park = { park: {
        name: "denali",
        location: "alaska",
        description: "really snowy",
        image: "hello pic2"
      }}

      post :create, :params => sample_park, format: :json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["name"]).to eq sample_park[:name]
      expect(returned_json["alaska"]).to eq sample_park[:location]
      expect(returned_json["really snowy"]).to eq sample_park[:description]
    end

    it "should should return errors when filled out incorrectly" do
      sample_park = { park: {
        name: "",
        location: "",
        description: "",
        image: "hello pic2"
      }}

      post :create, :params => sample_park, format: :json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["name"]).to eq sample_park["can't be blank"]
      expect(returned_json["alaska"]).to eq sample_park["can't be blank"]
      expect(returned_json["really snowy"]).to eq sample_park["can't be blank"]
    end
  end
end
