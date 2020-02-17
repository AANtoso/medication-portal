class Api::V1::MedicationsController < ApplicationController

    def index
        @medications = Medications.all 

        render json: @medications, status: 200
    end

    def show
        @medication = Medication.find(params[:id])

        render json: @medication, status: 200
    end

    def create
        @medication = Medication.create(medication_params)

        render json: @medication, status: 200
    end

    def update
        @medication = Medication.find(params[:id])
        @medication.update(medication_params)
        
        render json: @medication, status: 200
    end

    def destroy
        @medication = Medication.find(params[:id])
        @medication.delete

        render json: {medicationId: @medication.id}
    end

    private
    def medication_params
        params.require(:note).permit(:name, :class, :indication, :dose, :frequency, :note)
    end
end
