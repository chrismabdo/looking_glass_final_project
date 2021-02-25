require 'rails_helper'
require_relative "../helpers/feature_helpers.rb"

RSpec.feature "Send friend request", type: :feature do
  it 'can send a friend request' do
    create_two_users_and_log_one_in
    visit "/friendships"
    fill_in "friendship_username", with: "TestUser2"
    click_button "Send Request"
    expect(page).to have_content("Requests you've made TestUser2")
  end

  it 'can send a friend request' do
    create_two_users_and_log_one_in
    visit "/friendships"
    fill_in "friendship_username", with: "TestUser2"
    click_button "Send Request"
    expect(page).to_not have_content("Requests you've recieved TestUser2")
  end
end
