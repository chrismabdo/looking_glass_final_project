json.extract! wishlist, :id, :note, :user_id, :created_at, :updated_at
json.url wishlist_url(wishlist, format: :json)
