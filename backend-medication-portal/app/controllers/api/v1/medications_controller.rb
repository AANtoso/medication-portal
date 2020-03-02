class Api::V1::MedicationsController < ApplicationController

    def index
        medications = Medication.all 

        render json: medications
    end

    def show
        medication = Medication.find_by(id:params[:id])
        # options = {
        #     include: [:patients]
        # }
        render json: medication
    end

    def create
        patient = Patient.find_by(id: params[:patient_id])
        medication = Medication.create(medication_params)
        render json: medication, include: :patient
    end

    # def update
    #     medication = Medication.find(params[:id])
    #     medication.update(medication_params)
    #     render json: medication, include: :patient
    # end

    # def destroy
    #     medication = Medication.find_by(id:params[:id])
    #     medication.destroy
    #     render json: medication.id
    # end

    private
    def medication_params
        params.require(:medication).permit(:patient_id, :name, :pharm_class, :indication, :dose, :frequency, :note)
    end
end
