import axios from 'axios';

import { SpotClient } from '../../src/index.js';

jest.mock('axios', () => {
  const axiosFn = jest.fn();
  return {
    __esModule: true,
    default: axiosFn,
  };
});

const mockedAxios = axios as unknown as jest.Mock;

const rateLimitBody = {
  code: '429000',
  msg: 'Too many requests',
};

describe('KuCoin 429000 rate limit errors', () => {
  beforeEach(() => {
    mockedAxios.mockReset();
  });

  it('exposes body.code 429000 when KuCoin returns HTTP 429', async () => {
    mockedAxios.mockRejectedValueOnce({
      response: {
        status: 429,
        statusText: 'Too Many Requests',
        headers: {
          'gw-ratelimit-limit': '700',
          'gw-ratelimit-remaining': '0',
          'gw-ratelimit-reset': '489',
        },
        data: rateLimitBody,
      },
    });

    const client = new SpotClient();

    await expect(client.getTickers()).rejects.toMatchObject({
      code: 429,
      body: {
        code: '429000',
        msg: 'Too many requests',
      },
      headers: {
        'gw-ratelimit-reset': '489',
      },
    });
  });

  it('exposes body.code 429000 when HTTP 200 carries the system code', async () => {
    mockedAxios.mockResolvedValueOnce({
      status: 200,
      statusText: 'OK',
      headers: {},
      data: rateLimitBody,
    });

    const client = new SpotClient();

    await expect(client.getTickers()).rejects.toMatchObject({
      code: 200,
      body: {
        code: '429000',
        msg: 'Too many requests',
      },
    });
  });
});
