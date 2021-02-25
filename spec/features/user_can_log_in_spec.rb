require 'rails_helper'
require_relative "../helpers/feature_helpers.rb"

RSpec.feature "Log-In", type: :feature do
  it 'can sign you in to looking glass' do
    create_user
    visit "/users/sign_in"
    fill_in "user_username", with: "TestUser"
    fill_in "user_password", with: "password"
    click_button "Log in"
    expect(page).to have_content("Hello TestUser!")
  end
end
  