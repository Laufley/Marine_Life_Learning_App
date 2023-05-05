const baseURL = ("http://localhost:9000/api/marine_info/")

export const getMarineInfo = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const getOneMarineItem = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
}

export const updateOneMarineItem = (item) => {
    return fetch(baseURL + item._id, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}