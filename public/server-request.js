export async function getAllResidences() {
    const response = await fetch("/residences");
    const data = await response.json()

    return data;
}

export async function getOneResidence(residenceID) {
    const response = await fetch("/residences/" + residenceID);
    const data = await response.json()

    return data;
}

export async function postResidence(id, adress, floor, type) {
    const response = await fetch("/residences", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "id": id,
            "adress": adress,
            "floor": floor,
            "type": type
        })
    })
}