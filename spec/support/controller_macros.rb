module ControllerMacros
  def login_user
    # Before each test, create and login user_1
    before(:each) do
    @request.env["devise.mapping"] = Devise.mappings[:user]
    user = FactoryBot.create(:user)
    sign_in user
    end
  end

  def login_user_2
    # Before each test, create and login user_2
    before(:each) do
    @request.env["devise.mapping"] = Devise.mappings[:user]
    user_2 = create(:user, id: 2, username: "User2", email: "TestUser2@example.com", password: "password")
    sign_in user_2
    end
  end
end
