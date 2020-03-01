class CreateMedications < ActiveRecord::Migration[5.2]
  def change
    create_table :medications do |t|
      t.integer :patient_id
      t.string :name 
      t.string :pharm_class
      t.string :indication
      t.string :dose
      t.string :frequency
      t.text :note
      t.timestamps
    end
  end
end
