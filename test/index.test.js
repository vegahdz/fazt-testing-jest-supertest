import app from '../src/app'
import request from 'supertest'

describe('GET /task', () => {

    it('should respond with a 200 status code', async () => {
       const response = await request(app).get('/tasks').send()
       expect(response.statusCode).toBe(200);
    })

    it('should respond with an array', async () =>{
        const response = await request(app).get('/tasks').send()
        expect(response.body).toBeInstanceOf(Array)
    })
})


describe('PST / tasks', () => {

    // should respond with a 200 status code
    it('should respond with a 200 status code', async () => {
        const response = await request(app).post('/tasks').send()
        expect(response.statusCode).toBe(200)
    })

    // should respond with a content-type of application-json
    it('should have a content-type: application/json in header', async () => {
        const response = await request(app).post('/tasks').send()
        expect(response.headers['content-type']).toEqual(
            expect.stringContaining('json')
        )
    })

    // should respond with a json object containing the new task with an id
    it('should respond with an task ID', async () => {
        const response = await request(app).post('/tasks').send()
        expect(response.body.id).toBeDefined();
    } )
    // should respond with a json object containing the new task with an title
})