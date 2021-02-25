require 'rails_helper'

RSpec.feature "Sign-Up", type: :feature do
  it 'can sign you up to looking glass' do
    visit "/users/sign_up"
    fill_in "user_email", with: "ian@ian.com"
    fill_in "user_username", with: "Ian"
    fill_in "user_password", with: "password"
    fill_in "user_password_confirmation", with: "password"
    click_button 'Sign up'
    expect(page).to have_content("Hello Ian!")
  end
end

