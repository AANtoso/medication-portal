class Patient {
    constructor(patientJSON) {
        this.id = patientJSON.id
        this.name = patientJSON.name
        this.mrn = patientJSON.mrn
    }

    patientHTML() {
        return (`
            <div id = 'patient-container' class='patient-container card-body border border-secondary' patient-id='${this.id}'>
                <h4>Patient: ${this.name}</h4></br>
                <p>MRN: ${this.mrn}</p>
                <button name ='delete-patient' class"delete-button btn btn-secondary btn-sm" id="${this.id}">Delete</button>
            </div>
        `)
    }
}