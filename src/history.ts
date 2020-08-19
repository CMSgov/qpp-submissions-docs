import { createBrowserHistory } from 'history';

import envConfig from './envConfig';

export default createBrowserHistory({
  basename: envConfig.baseUrl,
});
