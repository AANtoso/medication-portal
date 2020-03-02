class Api::V1::PatientsController < ApplicationController
    def index
        patients = Patient.all
        render json: patients
    end

    def show
        patient = Patient.find(params[:id])
        render json: patient
    end

    def create
        patient = Patient.create(patient_params)
        render json: patient, include: :medications
    end

    private
    
    def patient_params
        params.require(:patient).permit(:name, :mrn)
    end

end