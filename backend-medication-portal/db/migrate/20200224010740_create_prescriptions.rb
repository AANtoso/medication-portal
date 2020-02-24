class CreatePrescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :prescriptions do |t|
      t.references :medication, null: false, foreign_key: true
      t.references :patient, null: false, foreign_key: true
      t.timestamps
    end
  end
end
