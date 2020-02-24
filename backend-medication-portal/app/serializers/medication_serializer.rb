class MedicationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :class, :indication, :dose, :frequency, :note
  has_many :patients, through: :prescriptions

end
