# require 'rails_helper'
# require_relative "../helpers/feature_helpers.rb"

# RSpec.feature "Unfriend", type: :feature do
#   it 'can unfriend' do
#     create_two_users_and_log_one_in_and_send_friend_request
#     visit "/users/sign_in"
#     fill_in "user_username", with: "TestUser2"
#     fill_in "user_password", with: "password"
#     click_button "Log in"
#     visit "/friendships"
#     click_link "Accept"
#     click_link "Unfriend"
#     expect(page).to_not have_content("TestUser1")
#   end
# end
