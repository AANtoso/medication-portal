class MedicationsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/medications'
    }

    getMedications() {
        return fetch(this.baseUrl)
            .then(res => res.json())
    }

    createMedicationDB(params) {
        let medicationData = {
            patient_id: params[0],
            name: params[1],
            pharm_class: params[2],
            indication: params[3],
            dose: params[4],
            frequency: params[5],
            note: params[6]
        }
        console.log(medicationData)

        return fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': "application/json"
                },
                body: JSON.stringify(medicationData)
            })
            .then(resp => resp.json())
    }

    deleteMedication(id) {
        return fetch(this.baseUrl + `/${MedicationId}`, {
                method: 'DELETE',
            })
            .then(resp => resp.json())
    }

}