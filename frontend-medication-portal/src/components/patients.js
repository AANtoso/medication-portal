class Patients {
    constructor() {
        this.patients = []
        this.adapter = new PatientsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadPatient()
    }

    initBindingAndEventListeners() {
        this.patientSelect = document.querySelector('#input-patient')
        this.searchContainer = document.querySelector('#search-container')
        this.patientInfo = document.querySelector('#search-patient')
        this.patientInfo.addEventListener('change', this.findMatch.bind(this))
        this.searchResult = document.querySelector('#search-result')
    }

    fetchAndLoadPatient() {
        this.adapter
            .getPatients()
            .then(patients => {
                for(const patient of patients.data) {
                    let patientObj = {
                        id: patients.id,
                        name: patient.attributes.name,
                        mrn: patient.attributes.mrn
                    }
                    let newPatient = new Patients(patientObj)
                    this.patients.push(newPatient)
                }
            })
            .then(() => this.renderPatientOptions())
            .then(() => this.searchPatientInfo())
    }

    renderPatientOptions() {
        let options = this.patients.map(patient => patient.name)
        let sortedOptions = options.sort()
        for(const patient of sortedOptions) {
            let element = document.createElement('option')
            element.innerText = patient
            this.patientSelect.appendChild(element)
        }
    }

    searchPatientInfo() {
        let options = this.patients.map(patient => patient.name)
        let sortedOptions = options.sort()
        for(const patient of sortedOptions) {
            let element = document.createElement('option')
            element.innerText = patient
            this.patientInfo.appendChild(element)
        }
    }

    findMatch(e) {
        e.preventDefault()
        const input = e.currentTarget.value
        let matchArray = this.patients.filter(pat => pat.name.includes(input))
        let newPatientArray = matchArray.map(pat => pat.patientHTML()).join('')
        this.searchResult.innerHTML = newPatientArray
    }
}