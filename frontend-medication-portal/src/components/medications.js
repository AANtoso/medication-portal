class Medications {
    constructor() {
        this.medications = []
        this.adapter = new MedicationsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadMedications()
    }

    initBindingAndEventListeners() {
        this.container = document.querySelector('#medication-container')
        this.container.addEventListener('click', this.deleteMedication.bind(this))
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
                const newMedication = new Medication(medication)
                this.container.innerHTML += newMedication.medicationHTML()
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

    deleteMedication(e) {
        console.log(e.target.id)
        const li = e.target.parentNode
        const id = e.target.id
        this.adapter.deleteMedication(id)
        li.remove()
    }
}


// function sayName() {
//     console.log("My name is", theName());  
//     function theName() {
//         return 'Jane Doe'
//     }
// }
//     sayName();