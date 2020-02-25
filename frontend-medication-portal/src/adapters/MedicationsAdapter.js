class MedicationsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/medications'
    }

    getMedications() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }

    async createMedicationDB(params) {
        let medicationData = {
            name: params[0]
            class: params[1]
            indication: params[2]
            dose: params[3]
            frequency: params[4]
            notes: params[5]
        }
    }
}