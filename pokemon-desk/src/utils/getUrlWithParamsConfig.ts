import config from '../config';

const getUrlWithParamsConfig = (endPointConfig: string, query: object) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endPointConfig].uri,
    query: { ...query },
  };
};

export default getUrlWithParamsConfig;
