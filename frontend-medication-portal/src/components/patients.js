class Patients {
    constructor() {
        this.patients = []
        this.adapter = new PatientsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadPatients()
    }

    initBindingAndEventListeners() {
        this.container = document.querySelector('#patient-container')
        this.container.addEventListener('click', this.deletePatient.bind(this))
        this.newPatientName = document.getElementById('new-patient-name')
        this.newPatientMrn = document.getElementById('new-patient-mrn')
        this.patientForm = document.getElementById('new-patient-form')
        this.patientForm = document.querySelector('#new-patient-form')
        this.patientForm.addEventListener('submit', this.createPatient.bind(this))
        this.sortPati = document.getElementById('sortPait')
        this.sortPati.addEventListener('click', this.sortPatient.bind(this))
            // this.searchPatient = document.getElementById('search-patient-name')
            // this.searchPatient.addEventListener('click', this.searchPatient.bind(this))
    }

    fetchAndLoadPatients() {
        this.adapter
            .getPatients()
            .then(patients => {
                // debugger
                patients.forEach(patient => this.patients.push(new Patient(patient)))
            })
            .then(() => {
                this.renderPatients()
                this.findPatient()
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
                    // this.container.setAttribute('data-name', patient.name)
                this.container.append(newPatient.patientHTML())
                    // this.container.innerHTML += newPatient.patientHTML()
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
                    this.container.append(newPatient.patientHTML())
                })
            })
    }

    findPatient() {
        const searchBar = document.querySelector('#search-bar')
            // debugger
        const patients = document.querySelectorAll('div[data-patient-name]')
            // listen for a value change inside search input
        searchBar.addEventListener('keyup', e => {
            // if there is a change, find the div with the data-patient-name = value inside search bar
            patients.forEach(patient => {
                if (e.target.value === patient.dataset.patientName) {
                    this.container.prepend(patient)
                } else {
                    patient.remove()
                }
            })
        })
    }


    renderPatients() {
        this.patients.forEach(patient => {
                this.container.append(patient.patientHTML())
            })
            // this.container.innerHTML = this.patients.map(patient => patient.patientHTML()).join(',')
            // debugger
    }

    deletePatient(e) {
        console.log(e.target.id)
        const li = e.target.parentNode
        const id = e.target.id
        this.adapter.deletePatient(id)
        li.remove()
    }
}