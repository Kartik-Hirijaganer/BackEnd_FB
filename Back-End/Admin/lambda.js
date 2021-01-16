//lambda.js file             
const awsServerlessExpress = require('aws-serverless-express')
const admin= require('./admin')
const server = awsServerlessExpress.createServer(admin)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }