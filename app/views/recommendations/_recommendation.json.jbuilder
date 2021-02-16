json.extract! recommendation, :id, :note, :user_id, :created_at, :updated_at
json.url recommendation_url(recommendation, format: :json)
