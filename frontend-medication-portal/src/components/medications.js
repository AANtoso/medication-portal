class Medications {
    constructor() {
        this.medications = []
        this.adapter = new MedicationsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadMedications()
    }

    initBindingAndEventListeners() {
        this.container = document.querySelector('#medications-container')
        this.medicationForm = document.querySelector('#new-medication-form')
        this.inputPatient = this.medicationForm.querySelector('#input-[patient')
        this.medicationName = this.medicationForm.querySelector('#input-name')
        this.medicationClass = this.medicationForm.querySelector('#input-class')
        this.medicationIndication = this.medicationForm.querySelector('#input-indication')
        this.medicationDose = this.medicationForm.querySelector('#input-dose')
        this.medicationFrequency = this.medicationForm.querySelector('#input-frequency')
        this.medicationNote = this.medicationForm.querySelector('#input-note')
        this.medicationForm.addEventListener('submit', this.createMedication.bind(this))
    }

    createMedication(e) {
        e.preventDefault()
        const name = this.medicationName.value
        const patient = this.inputPatient.value
        const class = this.medicationClass.value
        const indication = this.medicationIndication.value
        const dose = this.medicationDose.value
        const frequency = this.medicationFrequency.value
        const note = this.medicationNote.value
        const params = [name, patient, class, indication, dose, frequency, note]

        this.adapter.createMedicationDB(params)
            .then(medication => {
                this.medications.push(new Medications(medication.data.attributes))
                this.renderMedications()
            })
        this.medicationName.value = ''
        this.inputPatient.value = ''
        this.medicationClass.value = ''
        this.medicationIndication.value = ''
        this.medicationDose.value = ''
        this.medicationFrequency.value = ''
        this.medicationNote.value = ''
    }

    fetchAndLoadMedications() {
        this.adapter
            .getMedications()
            .then(medications => {
                for(const medication of medications) {
                    let medicationObj = {
                        id: medication.id,
                        patients: medication.patients,
                        name: medication.name,
                        class: medication.class,
                        indication: medication.indication,
                        dose: medication.dose,
                        frequency: medication.frequency,
                        note: medication.note
                    }
                    let newMedication = new Medications(medicationObj)
                    this.medications.push(newMedication)
                }
            })
            .then(() => this.renderMedications())
    }

    renderMedications() {
        this.container.innerHTML = this.medications.map(medication => medication.medicationHTML()).join('')
        this.container.addEventListener('click', (e) => {
            e.preventDefault()
            if(e.target.classList.contains('delete-button')) {
                let medicationId = e.target.parentElement.getAttributes("data-id")
                this.deleteMedication(medicationId)
            }
        })
    }

    deleteMedication(medicationId) {
        let parsedId = parseInt(medicationId, 10)
        this.adaptem
            .destroyMedicationId(parsedId)
        let removeIndex = this.medications.map(function(c){
                return medicationId.id
            }).indexOf(parsedId)
        this.medications.splice(removeIndex, 1)
        document.querySelector('[data-id="' + medicationId + '"]').parentElement.remove()
    }
}