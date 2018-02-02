const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const gym = require('./gyms')
const cron = require('./cron')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})
app.get('/updateGym', (req, res) => {
  gym
    .updateGym({token: req.query.token})
    .then(() => res.sendStatus(200))
})
app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
  // cron.addTask("Gym update cron", cron.computeGyms, 300);
})
