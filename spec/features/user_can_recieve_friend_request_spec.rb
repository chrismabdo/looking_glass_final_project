# require 'rails_helper'
# require_relative "../helpers/feature_helpers.rb"

# RSpec.feature "Recieve friend request", type: :feature do
#   it 'can accept a friend request' do
#     create_two_users_and_log_one_in_and_send_friend_request
#     visit "/users/sign_in"
#     fill_in "user_username", with: "TestUser2"
#     fill_in "user_password", with: "password"
#     click_button "Log in"
#     visit "/friendships"
#     expect(page).to have_content("Requests you've recieved TestUser1")
#     expect(page).to have_link("Accept")
#     expect(page).to have_link("Decline")
#   end

#   it 'can accept a friend request' do
#     create_two_users_and_log_one_in_and_send_friend_request
#     visit "/users/sign_in"
#     fill_in "user_username", with: "TestUser2"
#     fill_in "user_password", with: "password"
#     click_button "Log in"
#     visit "/friendships"
#     click_link "Accept"
#     expect(page).to have_link("Unfriend")
#   end

#   it 'can decline a friend request' do
#     create_two_users_and_log_one_in_and_send_friend_request
#     visit "/users/sign_in"
#     fill_in "user_username", with: "TestUser2"
#     fill_in "user_password", with: "password"
#     click_button "Log in"
#     visit "/friendships"
#     click_link "Decline"
#     expect(page).to_not have_link("Unfriend")
#     expect(page).to_not have_content("TestUser1")
#   end
# end