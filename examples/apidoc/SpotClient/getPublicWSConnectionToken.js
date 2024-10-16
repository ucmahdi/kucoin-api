const { SpotClient } = require('kucoin-api');

  // ENDPOINT: api/v1/bullet-public
  // METHOD: POST
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/kucoin-api/blob/master/src/SpotClient.ts#L1524

const client = new SpotClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getPublicWSConnectionToken(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
