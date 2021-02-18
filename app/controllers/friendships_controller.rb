class FriendshipsController < ApplicationController
  before_action :set_friendship, only: %i[ show edit update destroy ]

    def index
      @friendships = Friendship.all
    end

    def new
      @friendship = Friendship.new
    end

    def show
    end

    def create
      @friendship = Friendship.new(friendship_params)

      respond_to do |format|
        if @friendship.save
          format.html { redirect_to @friendship, notice: "Friendship was successfully created." }
          format.json { render :show, status: :created, location: @friendship }
        else
          format.html { render :new, status: :unprocessable_entity }
          format.json { render json: @friendship.errors, status: :unprocessable_entity }
        end
      end
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
