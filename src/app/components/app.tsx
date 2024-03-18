import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFound from './notFound/not-found';
import Layout from './layout';
import envConfig from '../../envConfig';
import { routesWithoutLinkText } from '../routes';

const App = () => {

  const router = createBrowserRouter([
      {
        path: '',
        element: <Layout />,
        errorElement: <NotFound />,
        children: routesWithoutLinkText,
      },
    ],
    { basename: envConfig.baseUrl, });

  return <RouterProvider router={router} />;
};

export default App;
