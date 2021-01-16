//lambda.js file             
const awsServerlessExpress = require('aws-serverless-express')
const user= require('./user')
const server = awsServerlessExpress.createServer(user)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }