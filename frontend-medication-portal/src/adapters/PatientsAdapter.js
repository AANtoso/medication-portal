class PatientsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/patients'
    }

    getPatients() {
        return fetch(this.baseUrl)
            .then(res => res.json())
    }

    async createPatientDB(params) {
        let patientData = {
            name: params[0],
            mrn: params[1],
        }

        return fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "application/json"
                },
                body: JSON.stringify(patientData)
            })
            .then(resp => resp.json())
    }
}