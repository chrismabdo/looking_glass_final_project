class AddApiidToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :api_id, :string
  end
end
