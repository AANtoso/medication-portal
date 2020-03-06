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
        this.sortPati = document.getElementById('sortPait')
        this.sortPati.addEventListener('click', this.sortPatient.bind(this))
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

    sortPatient() {
        this.container.innerHTML = ""
        this.adapter.sortPati()
            .then(patients => {
                patients.sort(function(a, b) {
                    let nameA = a.name.toUpperCase();
                    let nameB = b.name.toUpperCase()
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }).forEach(patient => {
                    const newPatient = new Patient(patient)
                    this.container.innerHTML += newPatient.patientHTML()
                })
            })
    }

    renderPatients() {
        console.log(this.patients)
        this.container.innerHTML = this.patients.map(patient => patient.patientHTML()).join(',')
    }

}