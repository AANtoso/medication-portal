class Patients {
    constructor() {
        this.patients = []
        this.adapter = new PatientsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadPatients()
    }

    initBindingAndEventListeners() {
        this.container = document.querySelector('#patient-container')
        this.newPatientName = document.getElementById('new-patient-name')
        this.newPatientMrn = document.getElementById('new-patient-mrn')
        this.patientForm = document.getElementById('new-patient-form')
        this.patientForm = document.querySelector('#new-patient-form')
        this.patientForm.addEventListener('submit', this.createPatient.bind(this))
    }

    fetchAndLoadPatients() {
        this.adapter
            .getPatients()
            .then(patients => {
                patients.forEach(patient => this.patients.push(new Patient(patient)))
            })
            .then(() => {
                this.renderPatients()
            })
    }

    createPatient(e) {
        e.preventDefault()
        const name = this.newPatientName.value
        const mrn = this.newPatientMrn.value
        const params = [name, mrn]
        this.adapter.createPatientDB(params)
            .then(patient => {
                const newPatient = new Patient(patient)
                this.container.innerHTML += newPatient.patientHTML()
            })
        this.newPatientName.value = ''
        this.newPatientMrn.value = ''
    }

    renderPatients() {
        this.container.innerHTML = this.patients.map(patient => patient.patientHTML()).join(',')
    }

}