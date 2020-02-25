class Patient {
    constructor(patient) {
        this.id = patient.id
        this.name = patient.name
        this.mrn = patient.mrn
        this.medications = patient.medications.map(m => m.name).join(', ')
    }

    patientHTML() {
        return (`
            <div id = 'patient-container' class='patient-container card-body border border-secondary' patient-id='${this.id}'>
                <h4>Patient: ${this.name}</h4></br>
                <p>MRN: ${this.mrn}</p>
            </div>
        `)
    }
}