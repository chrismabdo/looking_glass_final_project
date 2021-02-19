class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :release_date
      t.string :overview
      t.string :genre_ids
      t.string :poster_path

      t.timestamps
    end
  end
end
