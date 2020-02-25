class Patient {
    constructor(patient) {
        this.id = patient.id
        this.name = patient.name
        this.mrn = patient.mrn
        this.medications = patient.medications.map(m => m.name).join(', ')
    }
}