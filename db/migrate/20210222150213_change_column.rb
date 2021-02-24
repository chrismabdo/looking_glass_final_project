class ChangeColumn < ActiveRecord::Migration[6.1]
  def change
    change_column(:movies, :api_id, :integer)
  end
end
