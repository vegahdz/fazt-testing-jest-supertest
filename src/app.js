import express from "express";

const app = express()

app.get('/ping', (reg, res) => {
    res.send('poaaoong')
})

app.get('/tasks', (reg, res) => {
    res.json([])
})

app.post('/tasks', (reg, res) => {
    res.json({})
})

export default app;