class Medication < ApplicationRecord
    has_many :presctiptions, dependent: :destroy
    has many :patients, through: :presctiptions

    validates :name, presence: true
    validates :name, uniqueness: { case_sensitive: false}
end
