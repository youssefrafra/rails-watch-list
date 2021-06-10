class Bookmark < ApplicationRecord
  validates :movie, presence: true
  validates :list, presence: true
  validates :movie_id, uniqueness: { scope: :list_id }
  validates :comment, length: { minimum: 6 }
  
  belongs_to :movie
  belongs_to :list
end
