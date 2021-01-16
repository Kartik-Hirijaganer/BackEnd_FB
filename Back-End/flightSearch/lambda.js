//lambda.js file             
const awsServerlessExpress = require('aws-serverless-express')
const flight= require('./flight')
const server = awsServerlessExpress.createServer(flight)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }