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

}