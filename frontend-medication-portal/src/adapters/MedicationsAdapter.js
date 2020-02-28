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
            name: params[0],
            pharm_class: params[1],
            indication: params[2],
            dose: params[3],
            frequency: params[4],
            notes: params[5]
        }

        return fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "application/json"
                },
                body: JSON.stringify(medicationData)
            })
            .then(resp => resp.json())
    }

    // destroyMedicationId(medicationID) {
    //     let configObj = {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': "application/json"
    //         }
    //     }
    //     return fetch(this.baseUrl + `/${MedicationId}`, configObj)
    //         .then(resp => resp.json())
    // }

}