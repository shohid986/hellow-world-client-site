import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import UsersInfo from './components/UsersInfo/UsersInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LogIn></LogIn>
          </Route>
          <Route path="/voteshimanto">
            <LogIn></LogIn>
          </Route>
          <Route path="/userinfo">
            <UsersInfo></UsersInfo>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
