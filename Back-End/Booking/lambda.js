//lambda.js file             
const awsServerlessExpress = require('aws-serverless-express')
const booking= require('./booking')
const server = awsServerlessExpress.createServer(booking)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }