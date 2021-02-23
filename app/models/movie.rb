class Movie < ApplicationRecord
  has_many :recommendations
  accepts_nested_attributes_for :recommendations
end
