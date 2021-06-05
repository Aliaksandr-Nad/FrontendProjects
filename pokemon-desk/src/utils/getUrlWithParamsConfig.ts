import config, { ConfigEndpoint } from '../config';

interface IApiConfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: object;
}

interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

const getUrlWithParamsConfig = (endPointConfig: ConfigEndpoint, params: object = {}) => {
  const { method, uri }: IEndpoint = config.client.endpoint[endPointConfig as keyof typeof config.client.endpoint];
  let body = {};

  const apiConfigUri: IApiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = {
    ...params,
  };

  apiConfigUri.pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val as keyof typeof query]);
      delete query[val as keyof typeof query];
      return result;
    }
    return acc;
  }, apiConfigUri.pathname);

  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = query;
  }

  return { method, uri: apiConfigUri, body };
};

export default getUrlWithParamsConfig;
