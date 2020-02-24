class PatientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :mrn 
  has_many :medications, through: :prescriptions
end
