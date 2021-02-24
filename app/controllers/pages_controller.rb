class PagesController < ApplicationController
  def index
    @recommendations = Recommendation.select("note, user_id, recommendations.id, title, release_date, overview, poster_path, api_id").joins("INNER JOIN movies ON recommendations.movie_id = movies.id")
    @wishlists = Wishlist.select("note, user_id, wishlists.id, title, release_date, overview, poster_path, api_id").joins("INNER JOIN movies ON wishlists.movie_id = movies.id")
  end
end
