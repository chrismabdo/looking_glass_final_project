class FriendshipsController < ApplicationController

    def index
      @friendships = Friendship.all
      @friendship = Friendship.new
    end

    def new
      @friendship = Friendship.new
    end

    def create
      friend = User.find_by(username: friend_username[:username])
      if current_user.in_friendship_table?(User.find(friend.id))
        redirect_to friendships_url
        flash[:info] = "Cannot send friend request to this user - maybe you've already asked? Try not coming on so strong!"
      else
        @friendship = Friendship.new
        @friendship.friend_id = friend.id
        @friendship.confirmed = '0'
        @friendship.user_id = current_user.id
        @friendship.save
        redirect_to friendships_url
      end
    end

    def accept_friend
      current_user.confirm_friend(:friend_id) 
      redirect_to friendships_url
    end

    def delete_request
      current_user.delete_request(params[:friend_id]) 
      redirect_to friendships_url
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    # def set_friendship
    #   params.require(:friend_id)
    # end

    def friend_username 
      params.require(:friendship).permit(:username)
    end

    # Only allow a list of trusted parameters through.
    def friendship_params
      params.require(:friendship).permit(:user_id, :friend_id, :confirmed)
    end
end
