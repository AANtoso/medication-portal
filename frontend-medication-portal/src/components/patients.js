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
    }