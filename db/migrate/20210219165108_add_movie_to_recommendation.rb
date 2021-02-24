class AddMovieToRecommendation < ActiveRecord::Migration[6.1]
  def change
    add_reference :recommendations, :movie, foreign_key: true
  end
end
