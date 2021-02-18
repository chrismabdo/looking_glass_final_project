class FriendshipsController < ApplicationController
  before_action :set_friendship, only: %i[ show edit update destroy ]

    def index
      @friendships = Friendship.all
    end

    def new
      @friendship = Friendship.new
    end

    def create
      @friendship = Friendship.new(friendship_params)
      @friendship.confirmed = '0'
      @friendship.user_id = current_user.id
      @friendship.save
      redirect_to friendships_url
    end


    private
    # Use callbacks to share common setup or constraints between actions.
    def set_friendship
      @friendship = Friendship.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def friendship_params
      params.require(:friendship).permit(:user_id, :friend_id, :confirmed)
    end
end
