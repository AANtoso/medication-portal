class PrescriptionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :patient, :medication
  belongs_to :patient
  belings_to :medication
end
