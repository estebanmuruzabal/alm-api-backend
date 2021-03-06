'use strict'

const pkg = require('../package.json');

const config = {
    db: process.env.MONGODB_URL,
    port: process.env.PORT || 5000
}

Object.assign(config, { pkg })

module.exports = config