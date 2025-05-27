/* eslint-disable */
const { default: bootstrap } = require('../dist/main');
const express = require('express');

const expressApp = express();
bootstrap().then(app => {
  expressApp.use(app);
  exports.handler = (event, context, callback) => {
    const callbackWrapper = (err, response) => {
      if (err) return callback(err);
      callback(null, {
        statusCode: response.statusCode,
        body: JSON.stringify(response.body),
        headers: { 'Content-Type': 'application/json' },
      });
    };
    expressApp(event.path, event.httpMethod, callbackWrapper);
  };
});