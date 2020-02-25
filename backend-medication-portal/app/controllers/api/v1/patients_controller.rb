class Api::V1::PatientsController < ApplicationController
    def index
        patients = Patient.all
        render json: PatientSerializer.new(patients)
    end

    def show
        patient = Patient.find(params[:id])
        options = {
            include: [:medications]
          }
        render json: PatientSerializer.new(patient, options)
    end

    def create
        patient = Patient.create(patient_params)
        render json: PatientSerializer.new(patient)
    end

    private
    
    def patient_params
        params.require(:patient).permit(:name, :mrn)
    end

end
