const faker = require('faker')
const { expect, sinon, request, knex } = require('./test-helper')
const app = require('../lib/app')

afterEach(async () => {
  await knex('shoes').del()
  await knex('users').del()
})

// Verification que tout est fonctionnel
describe('un test qui est vert', () => {
  let response

  beforeEach(async () => {
    response = await request(app).get('/api/status')
  })

  it('le status de réponse est 200', () => {
    expect(response).to.have.status(200)
  })

  it('le body de réponse contient status = ok', () => {
    const expectedResponseBody = { status: 'ok' }
    expect(response).to.be.json
    expect(response.body).to.deep.equal(expectedResponseBody)
  })
})

// Verification que la  base de donnée est correctement configurée
describe('appel GET /api/users', () => {
  let response
  let john

  beforeEach(async () => {
    const createdUsers = await knex('users').insert({
      name: 'john',
    }).returning('*')
    john = createdUsers[0]

    response = await request(app).get('/api/users')
  })

  it('le status de réponse est 200', () => {
    expect(response).to.have.status(200)
  })

  it('le body de réponse contient le nombre généré', () => {
    const expectedResponseBody = { users: [ john ] }
    expect(response).to.be.json
    expect(response.body).to.deep.equal(expectedResponseBody)
  })
})

// Verification que la le template est correctement configuré
describe('appel GET /', () => {
  let response

  beforeEach(async () => {
    response = await request(app).get('/')
  })

  it('le status de réponse est 200', () => {
    expect(response).to.have.status(200)
  })

  it('should return a arrival index page', () => {
    // then
    expect(response).to.be.html
    expect(response.text).to.contain('Welcome to Express')
  })
})

