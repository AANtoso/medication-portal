class Medication < ApplicationRecord
    has_many :prescriptions, dependent: :destroy
    has_many :patients, through: :prescriptions

    validates :name, presence: true
    validates :name, uniqueness: { case_sensitive: false}
end
