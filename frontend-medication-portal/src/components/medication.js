class Medication {
    constructor(medication) {
        this.id = medication.id
        this.name = medication.name
        this.class = medication.class
        this.indication = medication.indication
        this.dose = medication.dose
        this.frequency = medication.frequency
        this.note = medication.note
        this.patients = this.getPatientNames(medication.patients)
    }

    getPatientNames(patients){
        return patients.map(1 => 1.name).join(',')
    }
}