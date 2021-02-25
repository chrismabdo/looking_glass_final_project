require 'rails_helper'

RSpec.describe FriendshipsController, type: :controller do

  login_user
  login_user_2

  describe "GET /new " do
    it "responds with 200 ok" do
      get :new
      expect(response).to have_http_status(:ok)
    end
  end

  describe "GET /" do
    it "responds with 200 ok" do
      get :index
      expect(response).to have_http_status(:ok)
    end
  end

  describe "POST /" do
    it "responds with 200 and redirects to friendships page" do
      post :create, params: { friendship: { user_id: "1", friend_id: 2, confirmed: "0", username: "TestUser" } }
      expect(response).to redirect_to(friendships_url)
    end
  end

  describe "POST /accept_friend" do
    it "accepts friend and redirects to friendships page" do
      post :accept_friend
      expect(response).to redirect_to(friendships_url)
    end
  end

  describe "DELETE /delete_request" do
    it "deletes friend and redirects to friendships page" do
      delete :delete_request
      expect(response).to redirect_to(friendships_url)
    end
  end
end

