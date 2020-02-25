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

    medicationHTML() {
        return (`
            <div id = 'medication-container' class='medication-container card-body border border-secondary' medication-id='${this.id}'>
                <h4>Medication: ${this.name}</h4></br>
                <p>Class: ${this.class}</p>
                <p>Indication: ${this.indication}</p>
                <p>Dose: ${this.dose}</p>
                <p>Frequency: ${this.frequency}</p>
                <p>Note: ${this.note}</p>
                <button name ='delete-medication' class"delete-button btn btn-secondary btn-sm">Delete</button>
            </div>
        `)
    }
}