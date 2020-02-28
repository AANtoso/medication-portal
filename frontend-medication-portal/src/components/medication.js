class Medication {
    constructor(medication) {
        this.id = medicationJSON.id
        this.name = medicationJSON.name
        this.class = medicationJSON.pharm_class
        this.indication = medicationJSON.indication
        this.dose = medicationJSON.dose
        this.frequency = medicationJSON.frequency
        this.note = medicationJSON.note
            // this.patients = this.getPatientNames(medication.patients)
    }

    //     getPatientNames(patients) {
    //         return patients.map(1 => 1. name).join(',')
    //     }

    //     medicationHTML() {
    //         return (`
    //             <div id = 'medication-container' class='medication-container card-body border border-secondary' medication-id='${this.id}'>
    //                 <h4>Medication: ${this.name}</h4></br>
    //                 <p>Pharm Class: ${this.pharm_class}</p>
    //                 <p>Indication: ${this.indication}</p>
    //                 <p>Dose: ${this.dose}</p>
    //                 <p>Frequency: ${this.frequency}</p>
    //                 <p>Note: ${this.note}</p>
    //                 <button name ='delete-medication' class"delete-button btn btn-secondary btn-sm">Delete</button>
    //             </div>
    //         `)
    //     }
}