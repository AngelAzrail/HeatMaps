import axios from 'axios';

const getPoints = (opts: { authToken: string }): Promise<any> => {
  return axios.get(
    'https://metrics.dtechs.io/dem-api/analytics/geo?from=2022-01-01&to=2022-02-01',
    {
      headers: {
        authorization: opts.authToken,
      },
    }
  );
};

export default getPoints;
