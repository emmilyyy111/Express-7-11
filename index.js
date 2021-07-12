
const express = require ('express')

const app = express()

app.get('/cars', (request, response) => {
    const cars = [{
        make: 'Audi',
        model: 'A3',
        year: 2018
    }, {
        make: 'Mazda',
        model: 'Miata',
        year: 1992
    }]
    response.send(cars)
})

app.get('/hello', (request, response) => {
    response.send('Hello World')
})


app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})