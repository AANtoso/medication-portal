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
            // debugger
        this.adapter.createPatientDB(params)
            .then(patient => {
                // this.patient.push(new Patient(patients.data.attributes))
                // debugger
                // console.log(patient)
                this.renderNewPatient()
            })
        this.newPatientName.value = ''
        this.newPatientMrn.value = ''
    }


    renderPatients() {
        this.container.innerHTML = this.patients.map(patient => patient.patientHTML()).join(',')
    }

    renderNewPatient() {
        console.log(localStorage)
            // debugger
            // this.container.innerHTML = patient.patientHTML()
    }

    // searchPatientInfo() {
    //     let options = this.patients.map(patient => patient.name)
    //     let sortedOptions = options.sort()
    //     for (const patient of sortedOptions) {
    //         let element = document.createElement('option')
    //         element.innerText = patient
    //         this.patientInfo.appendChild(element)
    //     }
    // }

    // findMatch(e) {
    //     e.preventDefault()
    //     const input = e.currentTarget.value
    //     let matchArray = this.patients.filter(pat => pat.name.includes(input))
    //     let newPatientArray = matchArray.map(pat => pat.patientHTML()).join('')
    //     this.searchResult.innerHTML = newPatientArray
    // }
}