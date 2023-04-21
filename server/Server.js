const stripe = require('stripe')(
  'sk_test_51MyDmVSDEuwTWqkjc6xx3aqmt59SbwKtpvTAM0XufMmoJ7mMwS3zxOtVSBHbDr8jJw3zTAvQUUfJL4dj7q3VRxF600TTtrqSoJ',
);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('req', req);
  res.send('Helloo ');
});

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.

  const {amount, currency} = req.body;

  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'},
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Running on PORT : ${PORT}`));
