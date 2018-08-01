// From Dan's Guides: https://github.com/justsml/guides/tree/master/express
// TODO: INSTALL PRE-REQS:
//  npm install express cors body-parser morgan nodemon
const express     = require('express')
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const cors        = require('cors')
const carRoute    = require('./routes/cars')
const modRoute    = require('./routes/mods')
const metricsRoute = require('./routes/metrics')
const app         = express()



app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/cars', carRoute)
app.use('/mods', modRoute)
app.use('/metrics', metricsRoute)

app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  })
})

module.exports = app

// // Optional Static file handler:
// // app.use('/', express.static('./build'))

// // TODO: ADD (MOUNT) YOUR MIDDLEWARE (ROUTES) HERE:
// // Example: app.use('/api/cat', require('./routes/cat'))


// // These 2 `app.use` MUST be last `.use`'s
// app.use(notFound)
// app.use(errorHandler)

// // eslint-disable-next-line
// function notFound(req, res, next) {
//   const url = req.originalUrl
//   if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
//     // Don't log less important (automatic) browser requests
//     console.error('[404: Requested file not found] ', url)
//   }
//   res.status(404).send({error: 'Url not found', status: 404, url})
// }

// // eslint-disable-next-line
// function errorHandler(err, req, res, next) {
//   console.error('ERROR', err)
//   const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
//   res.status(500).send({error: err.message, stack, url: req.originalUrl})
// }

// app.listen(port)
//   .on('error',     console.error.bind(console))
//   .on('listening', console.log.bind(console, 'Listening on ' + port))
