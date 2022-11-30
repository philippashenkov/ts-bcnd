import  express from 'express'
const app = express()

const port = 3000


app.get('/', (req, res) => {
    res.json('hello')
})

app.get('/welcome/:id', (req, res) => {
    res.json([
        {id:1, message:'Welcome'},
        {id:2, message:'Welcome back'}
    ].find(r => r.id === +req.params.id))
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
// open dev tool in web browser and put it in
// fetch('http://localhost:3000', {mathod: 'GET'}).then(res => res.json()).then(json => console.log(json))