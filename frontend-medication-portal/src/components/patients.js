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
}