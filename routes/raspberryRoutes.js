module.exports = (function() {
    'use strict';
    var raspberryRoutes = require('express').Router();
    const { exec } = require('child_process')
    const config = require('../config.js')

    raspberryRoutes.get('/', function (req, res) {
        res.send('Hello raspberryRoute!')
    });

    raspberryRoutes.get('/1', async function (req, res) {

        let connectionAddress = `${config.raspberries.node1.connectionType}://${config.raspberries.node1.localIp}`

        await exec(`open ${connectionAddress}`, (err) => {
            if (err) {
              console.log(`NodeJS couldn't execute open ${connectionAddress}`)
              return
            }
        })

        res.redirect('/')
    })

    raspberryRoutes.get('/2', async function (req, res) {

        let connectionAddress = `${config.raspberries.node2.connectionType}://${config.raspberries.node2.localIp}`

        await exec(`open ${connectionAddress}`, (err) => {
            if (err) {
              console.log(`NodeJS couldn't execute open ${connectionAddress}`)
              return
            }
        })
        res.redirect('/')
    })

    raspberryRoutes.get('/3', async function (req, res) {

        let connectionAddress = `${config.raspberries.node3.connectionType}://${config.raspberries.node3.localIp}`

        await exec(`open ${connectionAddress}`, (err) => {
            if (err) {
              console.log(`NodeJS couldn't execute open ${connectionAddress}`)
              return
            }
        })
        res.redirect('/')
    })

    raspberryRoutes.get('/4', async function (req, res) {

        let connectionAddress = `${config.raspberries.node4.connectionType}://${config.raspberries.node4.localIp}`

        await exec(`open ${connectionAddress}`, (err) => {
            if (err) {
              console.log(`NodeJS couldn't execute open ${connectionAddress}`)
              return
            }
        })
        res.redirect('/')
    })

    raspberryRoutes.get('/5', async function (req, res) {

        let connectionAddress = `${config.raspberries.node5.connectionType}://${config.raspberries.node5.localIp}`

        await exec(`open ${connectionAddress}`, (err) => {
            if (err) {
              console.log(`NodeJS couldn't execute open ${connectionAddress}`)
              return
            }
        })
        res.redirect('/')
    })

    raspberryRoutes.get('/6', async function (req, res) {

        let connectionAddress = `${config.raspberries.node6.connectionType}://${config.raspberries.node6.localIp}`

        await exec(`open ${connectionAddress}`, (err) => {
            if (err) {
              console.log(`NodeJS couldn't execute open ${connectionAddress}`)
              return
            }
        })
        res.redirect('/')
    })

    raspberryRoutes.get('/7', async function (req, res) {

        let connectionAddress = `${config.raspberries.node7.connectionType}://${config.raspberries.node7.localIp}`

        await exec(`open ${connectionAddress}`, (err) => {
            if (err) {
              console.log(`NodeJS couldn't execute open ${connectionAddress}`)
              return
            }
        })
        res.redirect('/')
    })

    raspberryRoutes.get('/8', async function (req, res) {

        let connectionAddress = `${config.raspberries.node8.connectionType}://${config.raspberries.node8.localIp}`

        await exec(`open ${connectionAddress}`, (err) => {
            if (err) {
              console.log(`NodeJS couldn't execute open ${connectionAddress}`)
              return
            }
        })
        res.redirect('/')
    })

    return raspberryRoutes
})()