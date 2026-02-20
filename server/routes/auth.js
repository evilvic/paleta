const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('../config/passport')

router
    .post('/signup', (req, res, next) => {

        const { username, email, password } = req.body

        User.register({ username, email }, password)
            .then(user => res.status(201).json({ user }))
            .catch(err => res.status(500).json({ err }))

    })
    .post('/login', passport.authenticate('local'), (req, res, next) => {

        const { user } = req

        res.status(200).json({ user })

    })
    .get('/logout', (req, res, next) => {

        req.logout(err => {
            if (err) return next(err)
            res.status(200).json({ msg: 'User logged out' })
        })

    })
    .get('/user', (req, res, next) => {

        const { user } = req
        res.status(200).json({ user })
    })

module.exports = router
