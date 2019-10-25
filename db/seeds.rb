# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  email: "janedoe@gmail.com",
  password: "janedoepassword",
  username: "JaneDoe123",
  password_confirmation: "janedoepassword"
)

User.create(
  email: "johndoe@gmail.com",
  password: "johndoepassword",
  username: "JohnDoe456",
  password_confirmation: "johndoepassword"
)

User.create(
  email: "jorgeduerte@gmail.com",
  password: "jorgeduertepassword",
  username: "JorgeDuerte798",
  password_confirmation: "jorgeduertepassword"
)

Park.create(
  name: "Badlands",
  location: "South Dakota",
  description: "The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient mammals such as the rhino, horse, and saber-toothed cat once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today.",
  image: "https://www.nps.gov/npgallery/GetAsset/593506B5-155D-4519-3EE4300527076079/proxy/hires?",
  user_id: 1
)

Park.create(
  name: "Yellowstone",
  location: "Wyoming, Montana, and Idaho",
  description: "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. From the dazzling eruptions of geysers, to the prismatic colors of thermophilic communities, to the natural sounds whispering or thundering through the landscape, Yellowstone is a feast for the senses.",
  image: "https://www.nps.gov/npgallery/GetAsset/FF90E536-1DD8-B71B-0B333C6D125A4EBC/proxy/hires?",
  user_id: 3
)

Park.create(
  name: "Olympic National Park",
  location: "Washington",
  description: "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!",
  image: "https://www.nps.gov/npgallery/GetAsset/4142600B-1DD8-B71B-0B4193585BB7BB70/proxy/hires?",
  user_id: 2
)

Park.create(
  name: "Glacier",
  location: "Montana",
  description: "Come and experience Glacier's pristine forests, alpine meadows, rugged mountains, and spectacular lakes. With over 700 miles of trails, Glacier is a hiker's paradise for adventurous visitors seeking wilderness and solitude. Relive the days of old through historic chalets, lodges, and the famous Going-to-the-Sun Road. Explore Glacier National Park and discover what awaits you.",
  image: "https://www.nps.gov/npgallery/GetAsset/3527B214-1DD8-B71B-0BE3EBC03564633F/proxy/hires?",
  user_id: 1
)

Park.create(
  name: "Biscayne",
  location: "Florida",
  description: "Within sight of downtown Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Here too is evidence of 10,000 years of human history, from pirates and shipwrecks to pineapple farmers and presidents. Outdoors enthusiasts can boat, snorkel, camp, watch wildlife…or simply relax in a rocking chair gazing out over the bay.",
  image: "https://www.nps.gov/bisc/learn/photosmultimedia/images/BISC-UW-250711-2.jpg?maxwidth=1200&autorotate=false",
  user_id: 2
)

Review.create!(
  rating: 1,
  review_body: "The Badlands lives up to its name; it was quite bad. Desolate, dry, and boring. Skip it. It's really not worth the visit.",
  park_id: 1,
  user_id: 1
)

Review.create!(
  rating: 2,
  review_body: "Giant chunks of ice. *Yawn* They were even melting. My freezer could do better.",
  park_id: 4,
  user_id: 1
)

Review.create!(
  rating: 5,
  review_body: "The microclimates at Olympic are gorgeous! I felt like I visited 3 different National Parks all in one trip! We went tide pooling early in the morning where we saw star fish and sea anemone. We loved the Seuss-like trees in the hall of mosses. The glaciers were reminiscent of those in Alaska and the snow-capped mountains made us feel like we were in the Alps! A must-do trip for young couples and families alike.",
  park_id: 3,
  user_id: 2
)

Review.create!(
  rating: 4,
  review_body: "It was a lot of fun but the parts of the park are so spread out that it made it difficult to get to everything.",
  park_id: 3,
  user_id: 3
)

Review.create!(
  rating: 2,
  review_body: "It was underwhelming. Pretty beautiful but I had heard that it was breathtaking.",
  park_id: 3,
  user_id: 1
)
