class CreatePrescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :prescriptions do |t|
      t.integer :prescrition_id
      t.string :medication_name
      t.datetime :prescribed_date
      t.timestamps
    end
  end
end
