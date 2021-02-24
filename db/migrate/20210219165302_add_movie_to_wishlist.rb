class AddMovieToWishlist < ActiveRecord::Migration[6.1]
  def change
    add_reference :wishlists, :movie, foreign_key: true
  end
end
