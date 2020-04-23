const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

// Make sure to add the 'proxy' in our client-side package.json file. Set it up to 'localhost:5000' so that the default api request from the client would be made to this port.
const port = process.env.PORT || 5000;

// Any request coming in, parse the body tag to a json.
app.use(bodyParser.json());

// Check if the urls coming in and out are properly formatted.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, function (error) {
  if (error) {
    throw error;
  }
  console.log(`Server running on PORT ${port}`);
});

app.post('/payment', (request, response) => {
  const body = {
    amount: request.body.amount,
    currency: 'usd',
    source: request.body.token.id,
  };

  stripe.charges.create(body, (error, chargeResponse) => {
    if (error) {
      response.status(500).send({ error: error });
    } else {
      response.status(200).send({ success: chargeResponse });
    }
  });
});
