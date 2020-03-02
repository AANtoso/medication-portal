class Medications {
    constructor() {
        this.medications = []
        this.adapter = new MedicationsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadMedications()
    }

    initBindingAndEventListeners() {
        this.container = document.querySelector('#medication-container')
        this.patientId = document.getElementById('patient')
        this.newMedicationName = document.getElementById('new-medication-name')
        this.newMedicationPharmClass = document.getElementById('new-medication-pharm_class')
        this.newMedicationIndication = document.getElementById('new-medication-indication')
        this.newMedicationDose = document.getElementById('new-medication-dose')
        this.newMedicationFrequency = document.getElementById('new-medication-frequency')
        this.newMedicationNote = document.getElementById('new-medication-note')
        this.medicationForm = document.getElementById('new-medication-form')
        this.medicationForm = document.querySelector('#new-medication-form')
        this.medicationForm.addEventListener('submit', this.createMedication.bind(this))
    }

    createMedication(e) {
        e.preventDefault()
        const patientId = this.patientId.value
        const name = this.newMedicationName.value
        const pharmClass = this.newMedicationPharmClass.value
        const indication = this.newMedicationIndication.value
        const dose = this.newMedicationDose.value
        const frequency = this.newMedicationFrequency.value
        const note = this.newMedicationNote.value
        const params = [patientId, name, pharmClass, indication, dose, frequency, note]

        this.adapter.createMedicationDB(params)
            .then(medication => {
                // this.medications.push(new Medication(medication.data.attributes))
                this.renderNewMedication(medication)
            })
        this.patientId.value = ''
        this.newMedicationName.value = ''
        this.newMedicationPharmClass.value = ''
        this.newMedicationIndication.value = ''
        this.newMedicationDose.value = ''
        this.newMedicationFrequency.value = ''
        this.newMedicationNote.value = ''
    }

    fetchAndLoadMedications() {
        this.adapter
            .getMedications()
            .then(medications => {
                medications.forEach(medication => this.medications.push(new Medication(medication)))
            })
            .then(() => {
                this.renderMedications()
            })
    }

    renderMedications() {
            this.container.innerHTML = this.medications.map(medication => medication.medicationHTML()).join('')
        }
        //     this.container.addEventListener('click', (e) => {
        //         e.preventDefault()
        //         if (e.target.classList.contains('delete-button')) {
        //             let medicationId = e.target.parentElement.getAttributes("data-id")
        //             this.deleteMedication(medicationId)
        //         }
        //     })
        // }

    renderNewMedication() {
        console.log(localStorage)
            // debugger
            // this.container.innerHTML = medication.medicationHTML()
    }

    // deleteMedication(medicationId) {
    //     let parsedId = parseInt(medicationId, 10)
    //     this.adaptem
    //         .destroyMedicationId(parsedId)
    //     let removeIndex = this.medications.map(function(c) {
    //         return medicationId.id
    //     }).indexOf(parsedId)
    //     this.medications.splice(removeIndex, 1)
    //     document.querySelector('[data-id="' + medicationId + '"]').parentElement.remove()
    // }
}