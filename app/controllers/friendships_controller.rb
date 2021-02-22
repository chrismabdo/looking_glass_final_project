class FriendshipsController < ApplicationController
  # before_action :set_friendship, only: %i[ show edit update destroy ]

    def index
      @friendships = Friendship.all
      @friendship = Friendship.new
    end

    def new
      @friendship = Friendship.new
    end

    def create
      print 'printing friend_id'
      print friendship_params[:friend_id]
      if current_user.in_friendship_table?(User.find(friendship_params[:friend_id]))
        redirect_to new_friendship_url
        flash["Cannot send friend request to this user - maybe you've already asked? Try not coming on so strong!"]
      else
        @friendship = Friendship.new(friendship_params)
        @friendship.confirmed = '0'
        @friendship.user_id = current_user.id
        @friendship.save
        redirect_to friendships_url
      end
    end

    def accept_friend
      current_user.confirm_friend(params[:friend_id]) 
      redirect_to friendships_url
    end

    def delete_request
      current_user.delete_request(params[:friend_id]) 
      redirect_to friendships_url
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_friendship
      params.require(:friend_id)
    end

    # Only allow a list of trusted parameters through.
    def friendship_params
      params.require(:friendship).permit(:user_id, :friend_id, :confirmed)
    end
end
