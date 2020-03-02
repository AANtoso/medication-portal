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
        this.patientForm = document.getElementById('new-patient-form')
        this.patientForm = document.querySelector('#new-patient-form')
        this.patientForm.addEventListener('submit', this.createPatient.bind(this))
    }

    fetchAndLoadPatients() {
        // this.patientsAdapter.getPatients().then(patients => {
        //     patients.map(patient => this.patients.push(new Patients(patient)))
        // })
        // .then(this.medicationsAdapter.getMedications().then(medications => {
        //     medications.map(medication => this.medications.push(new medication(medication)))
        // }))
        // .then(() => {
        //     this.displayPatients()
        // })
        // .then(() => {
        //     this.displayMedications()
        // })
        this.adapter
            .getPatients()
            .then(patients => {
                patients.forEach(patient => this.patients.push(new Patient(patient)))
            })
            .then(() => {
                this.renderPatients()
            })
            //         // .then(patients => {
            //         //     for (const patient of patients.data) {
            //         //         let patientObj = {
            //         //             id: patients.id,
            //         //             name: patient.attributes.name,
            //         //             mrn: patient.attributes.mrn
            //         //         }
            //         //         let newPatient = new Patients(patientObj)
            //         //         this.patients.push(newPatient)
            //         //     }
            //         // })
            //         // .then(() => this.renderPatientOptions())
            //         // .then(() => this.searchPatientInfo())
            // }
            // render() {
            //     console.log(localStorage)
    }

    createPatient(e) {
        e.preventDefault()
        const name = this.patientName.value
        const mrn = this.patientMrn.value
        const params = [name, mrn]

        this.adapter.createPatientDB(params)
        then(patient => {
            this.patients.push(new Patient(patients.data.attributes))
            this.renderPatients()
        })
        this.patientName.value = ''
        this.patientMrn.value = ''
    }


    renderPatients() {
        this.container.innerHTML = this.patients.map(patient => patient.patientHTML()).join(',')
            // let sortedOptions = options.sort()
            // for (const patient of sortedOptions) {
            //     let element = document.createElement('option')
            //     element.innerText = patient
            //     this.patientSelect.appendChild(element)
            // }
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