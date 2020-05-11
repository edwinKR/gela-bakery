const functions = require('firebase-functions');

// Purpose: the entry point into our function to use this function and set our GraphQL server to accept requests at a certain endpoint.
const configureServer = require('./server');

// Initialize server
const graphqlServer = configureServer();

const graphqlHandler = graphqlServer.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});

// Create and export the API

exports.graphql = functions.https.onRequest(graphqlHandler);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
