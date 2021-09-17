import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Forecast from './pages/Forecast';
import Details from './pages/Details';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Forecast />
        </Route>

        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </>
  );
}

export default App;
