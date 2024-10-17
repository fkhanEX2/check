import {BrowserRouter,Switch, Link, Route} from 'react-router-dom';

import Message from "./Components/Message";
import {Home} from "./Components/HOme";


ReactDOM.render(
<>
  <BrowserRouter>
    <div>
      <div> <h1>Logo</h1></div>
      <div>
        <Link to='/home'>Home Page</Link>
        <Link to='/Login'>Login Page</Link>
      </div>
    </div>
    <Switch>
      <Route exact path ='/home' component= {Home}></Route>
      <Route exact path ='/Login' component = {Message}></Route>
    </Switch>
  </BrowserRouter>
  <Home/>
  <Message/>
</>,
document.getElementById('root')
);

