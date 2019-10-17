# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Park.create(
  name: "Yellowstone",
  location: "Montana",
  description: "Old Faithful",
  image: "hello picture"
)

Park.create(
  name: "Acadia",
  location: "Maine",
  description: "There are a lot of wonderful short hikes with breathtaking views!",
  image: "a picture"
)

Park.create(
  name: "Olympic National Park",
  location: "Washington",
  description: "This park is beautiful and has many microclimates including a rainforests, tide pools, and snow capped mountains.",
  image: "it's a picture"
)

Review.create!(
  rating: 5,
  review_body: "Loved it!!",
  park_id: 1
)
