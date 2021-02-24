require 'rails_helper'

RSpec.describe RecommendationsController, type: :controller do
  
login_user

  # describe "POST /recommendations" do
  #   it "creates a recommendation associated with a user" do
  #     post :create, params: { recommendation: { note: "TestRec", user_id: 1, movie_id: 1 } }
  #     recommendation = Recommendation.find(id: 1)
  #     expect(recommendation.user_id).to eq 1
  #   end
  # end
end
