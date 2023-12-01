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

// export async function postResidence(id, adress, floor, type) {
//     const response = await fetch("/residences", {
//         method: "post",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             "id": id,
//             "adress": adress,
//             "floor": floor,
//             "type": type
//         })
//     })
// }

export async function postResidence(id, address, type, floor, rooms, size, price,
    yearBuilt, balcony, storage, parking, courtyard, patio, imageURL, additionalInfo
) {
    const response = await fetch("/residences", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "address": address,
            "type": type,
            "floor": floor,
            "rooms": rooms,
            "size": size,
            "price": price,
            "yearBuilt": yearBuilt,
            "balcony": balcony,
            "storage": storage,
            "parking": parking,
            "courtyard": courtyard,
            "patio": patio,
            "imageURL": imageURL,
            "additionalInfo": additionalInfo
        })
    })
}