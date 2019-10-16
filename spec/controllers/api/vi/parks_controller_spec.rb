require 'rails_helper'

RSpec.describe Api::V1::ParksController, type: :controller do
    let!(:first_park) {Park.create(
        name:"leslie",
        location:"montana",
        description:"old faithful",
        image: "hello picture"
    )}

    let!(:second_park) {Park.create(
        name:"denali",
        location:"alaska",
        description:"really snowey",
        image: "hello pic2"
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
end
