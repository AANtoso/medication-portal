class MedicationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :pharm_class, :indication, :dose, :frequency, :note
  has_many :patients, through: :prescriptions

end
