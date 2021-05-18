import { useRoutes } from 'hookrouter';
import routes from './routes';

const App = () => {
  return useRoutes(routes);
};

export default App;
