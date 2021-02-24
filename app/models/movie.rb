class Movie < ApplicationRecord
  has_many :recommendations
  has_many :wishlists
  accepts_nested_attributes_for :recommendations
  accepts_nested_attributes_for :wishlists
end
