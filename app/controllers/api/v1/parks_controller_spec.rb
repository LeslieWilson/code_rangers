
wanna see all campers reeturned to me in a json hash
require "rails_helper"


Rspec.describe Api::V1::ParksController do, type: :controller do
describe "GET#index" do
  it "returns a successful status and content type of json" do
    get :index
    # binding.pry
end

end
  it "returns a json hash of our parks" do
    get :index
    # binding.pry

    response_body = JSON.parse(response.body)
    expect(response.body[0]["name"]).to_eq first_camper.name
end


describe "#POSTcreate" do
  context :when a  successful request is made with the proper params do
  let!(:new_park_hash) { park: {name: "dalia", park_id:1}}
  it "creates a new park object in the database" do
    expect{ post :create, new_parks_hash, format: :json}.to change{Park.count}.by 1
end
it "returns a newly created park" do
end
end
