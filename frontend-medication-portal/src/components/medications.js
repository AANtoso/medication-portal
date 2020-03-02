class Medications {
    constructor() {
        this.medications = []
        this.adapter = new MedicationsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadMedications()
    }

    initBindingAndEventListeners() {
        this.container = document.querySelector('#medication-container')
        this.newMedicationName = document.getElementById('new-medication-name')
        this.medicationForm = document.getElementById('new-medication-form')
        this.medicationForm = document.querySelector('#new-medication-form')
        this.medicationForm.addEventListener('submit', this.createMedication.bind(this))
    }

    createMedication(e) {
        e.preventDefault()
        const name = this.medicationName.value
        const pharm_class = this.medicationPharm_class.value
        const indication = this.medicationIndication.value
        const dose = this.medicationDose.value
        const frequency = this.medicationFrequency.value
        const note = this.medicationNote.value
        const params = [name, pharm_class, indication, dose, frequency, note]

        this.adapter.createMedicationDB(params)
        then(medication => {
            this.medications.push(new Medication(medication.data.attributes))
            this.renderMedications()
        })
        this.medicationName.value = ''
        this.medicationPharm_class.value = ''
        this.medicationIndication.value = ''
        this.medicationDose.value = ''
        this.medicationFrequency.value = ''
        this.medicationNote.value = ''
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