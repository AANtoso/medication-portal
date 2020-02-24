class Patient < ApplicationRecord
    has_many :prescriptions, dependent: :destroy
    has_many :medications, through: :prescriptions

    validates :name, presence: true
    validates :name, uniqueness: { case_sensitive: false}
end
