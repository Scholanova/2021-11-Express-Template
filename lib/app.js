const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const { knex } = require('../db/knex-db-connection')
const apiRouter = require('./routes/api-router')

const { RouteNotFoundError } = require('./errors')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// API Router
app.use('/api', apiRouter)

app.get('/', (req, res, next) => {
  const userCountQuery = knex('users').count('id').first()
  const shoeCountQuery = knex('shoes').count('id').first()

  Promise.all([
    userCountQuery,
    shoeCountQuery,
  ]).then(([ { count: userCount }, { count: shoeCount } ]) => {
      res.render('index', { title: 'Express', userCount, shoeCount })
    })
    .catch(next)
})

app.get('/users', (req, res, next) => {
  const userCountQuery = knex('users')

  knex('users').then(users => {
      res.render('user-list', { users })
    })
    .catch(next)
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(new RouteNotFoundError())
})

// error handler
app.use((err, req, res, next) => {
  if (err instanceof RouteNotFoundError) {
    res.status(404).render('error-404')
    return
  }

  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
