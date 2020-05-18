class Patient {
    constructor(patientJSON) {
        this.id = patientJSON.id
        this.name = patientJSON.name
        this.mrn = patientJSON.mrn
    }

    patientHTML() {
        const patientCard = document.createElement("div")
        patientCard.classList.add("patient-container", "card-body", "border", "border-secondary")
        patientCard.setAttribute("data-patient-id", this.id)
        patientCard.setAttribute("data-patient-name", this.name)

        const patientName = document.createElement("h4")
        patientName.textContent = `Patient: ${this.name}`

        const patientMRN = document.createElement("p")
        patientMRN.textContent = `MRN: ${this.mrn}`

        const deletePatientBtn = document.createElement("button")
        deletePatientBtn.id = this.id
        deletePatientBtn.classList.add("delete-button", "btn", "btn-secondary", "btn-sm")
        deletePatientBtn.name = "delete-patient"
        deletePatientBtn.textContent = "Delete"
        patientCard.append(patientName, patientMRN, deletePatientBtn)

        return patientCard

        // return (`
        //     <div class='patient-container card-body border border-secondary' data-patient-id='${this.id}' data-patient-name='${this.name}'>
        //         <h4>Patient: ${this.name}</h4></br>
        //         <p>MRN: ${this.mrn}</p>
        //         <button name ='delete-patient' class"delete-button btn btn-secondary btn-sm" id="${this.id}">Delete</button>
        //     </div>
        // `)
    }
}