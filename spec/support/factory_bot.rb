require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    username { 'username' }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :park do
    name { Faker::Name.first_name }
    location { Faker::Lorem.characters }
    description { Faker::Lorem.paragraph(sentence_count: 3) }
    image {
      Faker::Name.first_name
    }
  end

  factory :review do
    rating { Faker::Number.within(range: 1..5) }
    review_body { Faker::Lorem.paragraph(sentence_count: 4) }
  end
end
