const express = require('express')
const { knex } = require('../../db/knex-db-connection')
const { ResourceNotFoundError, UserNameEmptyError } = require('../errors')

const router = express.Router()

router.get('/status', function (req, res) {
  res.send({ status: 'ok' })
})

router.get('/users', (req, res, next) => {
  knex('users').select('*')
    .then((users) => {
      res.json({ users })
    })
    .catch(next)
})

module.exports = router
