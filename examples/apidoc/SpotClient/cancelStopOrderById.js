const { SpotClient } = require('kucoin-api');

  // ENDPOINT: api/v1/stop-order/{orderId}
  // METHOD: DELETE
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/kucoin-api/blob/master/src/SpotClient.ts#L912

const client = new SpotClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.cancelStopOrderById(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
