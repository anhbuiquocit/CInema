import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import { FooterContainer } from './containers/FooterContainer';
import { routes } from './routes';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const listRoutes = (data) => {
    let reslut = null
    if (data != null) {
      reslut = data.map((item, index) => {
        return (
          <Route key={index} path={item.path} exact={item.exact} component={item.main} />
        );
      });
    }
    return reslut;
  }
  return (
    <>
      <Router>

        <HeaderContainer />
        <Switch>
          {listRoutes(routes)}
        </Switch>
        <FooterContainer />
      </Router>
    </>

  );
}

export default App;
