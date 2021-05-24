import logo from './logo.svg';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Register from './component/Register'
import Login from './component/Login'
import Admin from './component/Secret'

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route exact path='/' component={Register}></Route>
           <Route exact path='/login' component={Login}></Route>
           <Route exact path='/secret' component={Admin} ></Route>
        </Switch>
        </Router>
</div>
  );
}

export default App;
