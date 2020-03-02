class Medication {
    constructor(medicationJSON) {
        this.id = medicationJSON.id
        this.patientId = medicationJSON.patient_id
        this.name = medicationJSON.name
        this.pharmClass = medicationJSON.pharm_class
        this.indication = medicationJSON.indication
        this.dose = medicationJSON.dose
        this.frequency = medicationJSON.frequency
        this.note = medicationJSON.note
    }

    medicationHTML() {
        return (`
                <div id = 'medication-container' class='medication-container card-body border border-secondary' medication-id='${this.id}'>
                    <h4>Patient ID: ${this.patientId}</h4></br>
                    <p>Medication: ${this.name}</p></br>
                    <p>Pharm Class: ${this.pharmClass}</p>
                    <p>Indication: ${this.indication}</p>
                    <p>Dose: ${this.dose}</p>
                    <p>Frequency: ${this.frequency}</p>
                    <p>Note: ${this.note}</p>
                    <button name ='delete-medication' class"delete-button btn btn-secondary btn-sm">Delete</button>
                </div>
            `)
    }
}