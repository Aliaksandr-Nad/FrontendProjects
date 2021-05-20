import config from '../config';

const getUrlWithParamsConfig = (endPointConfig: string) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endPointConfig].uri,
    query: { ...config.client.endpoint[endPointConfig].query },
  };
};

export default getUrlWithParamsConfig;
