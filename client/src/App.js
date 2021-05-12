import logo from './logo.svg';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Navbar from './component/Navbar'
import Login from './component/Login'
import Admin from './component/Secret'

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar></Navbar>
        <Switch>
           <Route exact path='/' component={Login}></Route>
           <Route exact path='/secret' component={Admin} ></Route>
        </Switch>
        </Router>
</div>
  );
}

export default App;
