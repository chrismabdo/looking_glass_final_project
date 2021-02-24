def create_user
  visit "/users/sign_up"
    fill_in "user_email", with: "TestUser@example.com"
    fill_in "user_username", with: "TestUser"
    fill_in "user_password", with: "password"
    fill_in "user_password_confirmation", with: "password"
    click_button 'Sign up'
    visit "/friendships"
    click_link 'Logout'
end

def create_two_users
  visit "/users/sign_up"
  fill_in "user_email", with: "TestUser1@example.com"
  fill_in "user_username", with: "TestUser1"
  fill_in "user_password", with: "password"
  fill_in "user_password_confirmation", with: "password"
  click_button 'Sign up'
  visit "/friendships"
  click_link 'Logout'

  visit "/users/sign_up"
  fill_in "user_email", with: "TestUser2@example.com"
  fill_in "user_username", with: "TestUser2"
  fill_in "user_password", with: "password"
  fill_in "user_password_confirmation", with: "password"
  click_button 'Sign up'
  visit "/friendships"
  click_link 'Logout'
end

def create_two_users_and_log_one_in
  create_two_users
  visit("/users/sign_in")
  fill_in "user_username", with: "TestUser1"
  fill_in "user_password", with: "password"
  click_button "Log in"
end

def create_two_users_and_log_one_in_and_send_friend_request 
  create_two_users_and_log_one_in
  visit "/friendships"
  fill_in "friendship_username", with: "TestUser2"
  click_button "Send Request"
  click_link "Logout"
end