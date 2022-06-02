function submitData (name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(newData => {
        document.body.innerHTML = `<p>${newData.id}</p>`
    })
    .catch(resp => {
        document.body.innerHTML = `<p>${resp.message}</p>`
    })
}