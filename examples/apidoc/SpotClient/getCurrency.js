const { SpotClient } = require('kucoin-api');

  // ENDPOINT: api/v3/currencies/{currency}
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/kucoin-api/blob/master/src/SpotClient.ts#L532

const client = new SpotClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getCurrency(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
