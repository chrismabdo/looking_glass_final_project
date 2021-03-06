class MoviesController < ApplicationController
  before_action :set_movie, only: %i[ show edit update destroy ]

  # GET /movies or /movies.json
  def index
    @movies = Movie.all
  end

  # GET /movies/1 or /movies/1.json
  def show
  end

  # GET /movies/new
  def new
    @movie = Movie.new
  end

  # GET /movies/1/edit
  def edit
  end

  # POST /movies or /movies.json
  def create
    @movie = Movie.new(movie_params)

    respond_to do |format|
      if @movie.save
        format.html { redirect_to @movie, notice: "Movie was successfully created." }
        format.json { render :show, status: :created, location: @movie }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @movie.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /movies/1 or /movies/1.json
  def update
    respond_to do |format|
      if @movie.update(movie_params)
        format.html { redirect_to @movie, notice: "Movie was successfully updated." }
        format.json { render :show, status: :ok, location: @movie }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @movie.errors, status: :unprocessable_entity }
      end
    end
  end


  def add_recommendation
    @movie = Movie.find_by(api_id: movie_params[:api_id])
    p'--------------'
    p movie_params[:recommendations_attributes]
    p'--------------'
    if @movie
      p 'in the IF'
      @recommendation = @movie.recommendations.create(movie_params[:recommendations_attributes])
    else
      p 'in the ELSE'
      Movie.create(movie_params)
    end
  end

  def add_wishlist
    p 'INSIDE ADD_WISHLIST'
    @movie = Movie.find_by(api_id: movie_params[:api_id])
    p'--------------'
    p movie_params[:wishlists_attributes]
    p'--------------'
    if @movie
      p 'in the IF'
      @wishlist = @movie.wishlists.create(movie_params[:wishlists_attributes])
    else
      p 'in the ELSE'
      Movie.create(movie_params)
    end
  end

  # DELETE /movies/1 or /movies/1.json
  def destroy
    @movie.destroy
    respond_to do |format|
      format.html { redirect_to movies_url, notice: "Movie was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = Movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:api_id, :title, :release_date, :overview, :genre_ids, :poster_path, recommendations_attributes: [:note, :user_id], wishlists_attributes: [:note, :user_id])
    end

    def recommendation_params
      params.fetch(:recommendation, {}).permit(:note, :user_id, :movie_id)
    end
end
