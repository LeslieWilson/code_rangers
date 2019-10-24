require 'rails_helper'

feature 'park form' do
  scenario 'updates successfully' do
    user = FactoryBot.create(:user)
    park = FactoryBot.create(:park, user_id: user.id)
    login_as user
    visit edit_park_path(park)

    fill_in 'Location', with: 'California'
    fill_in 'Description', with: 'this is my change'

    click_button 'Edit Park'

    expect(page).to have_current_path(park_path(park))
  end
end
