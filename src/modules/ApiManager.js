const remoteURL = "http://localhost:5002"

export default {
  get(id, collection) {
    return fetch(`${remoteURL}/${collection}/${id}`).then(e => e.json())
  },
  getAll(collection) {
    return fetch(`${remoteURL}/${collection}`).then(e => e.json())
  },
  delete(id, collection) {
    return fetch(`${remoteURL}/${collection}/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  post(newProduct, collection) {
    return fetch(`${remoteURL}/${collection}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    }).then(data => data.json())
  },
  update(editedProduct, collection) {
    return fetch(`${remoteURL}/${collection}/${editedProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedProduct)
    }).then(data => data.json());
  },
  getAllProductLocations() {
    return fetch(`${remoteURL}/productLocations?_expand=product&_expand=location`).then(e => e.json())
  },
  getProductLocation(id) {
    return fetch(`${remoteURL}/productLocations/${id}?_expand=product&_expand=location`).then(e => e.json())
  }
}
