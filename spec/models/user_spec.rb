require 'rails_helper'

RSpec.describe User, type: :model do
  
  it { is_expected.to be }

  it { should have_many(:friendships) }
  it { should have_many(:inverse_friendships) }

  describe "friends" do
    it 'returns a list of the users friends' do
    user_1 = User.create(email: "test1@test.com", password: "password", username: "test1")
    user_2 = User.create(email: "test2@test.com", password: "password", username: "test2")
    friendship = Friendship.create(user_id: 1, friend_id: 2, confirmed: '1')
    expect(user_1.friends_full_table.length).to eq 1
    end
  end

  describe "friends" do
    it 'returns a list of the users friends' do
    user_1 = User.create(email: "test1@test.com", password: "password", username: "test1")
    user_2 = User.create(email: "test2@test.com", password: "password", username: "test2")
    friendship = Friendship.create(user_id: 1, friend_id: 2, confirmed: '0')
    expect(user_1.friends_full_table.length).to eq 1
    end
  end

  describe "confirm_friend" do
    it 'returns a list of the users friends' do
    user_1 = User.create(email: "test1@test.com", password: "password", username: "test1")
    user_2 = User.create(email: "test2@test.com", password: "password", username: "test2")
    friendship = Friendship.create(user_id: 1, friend_id: 2, confirmed: '0')
    user_1.confirm_friend(user_2)
    expect(user_1.friends_full_table.length).to eq 1
    end
  end
end
