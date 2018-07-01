import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import './App.css';
import {Login} from './component/login';
import { store } from './redux/store';
import Dashboard from './screens/Dashboard';
import Home from './screens/Home';
import Timer from './screens/Timer';


class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <Router>
        <div style={{ textAlign: 'center' }}>
          <h1>Testing</h1>
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <NavLink exact={true} to='/home' className='nav-link' activeClassName='active'>Home</ NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact={true} to='/dash' className='nav-link' activeClassName='active'>Dashboard</ NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact={true} to='/timer' className='nav-link' activeClassName='active'>Timer</ NavLink>
            </li>
            <li>
            <NavLink exact={true} to='/login' className='nav-link' activeClassName='active'>Login</ NavLink>
            </li>
          </ul>
          <Switch>
            <Route path='/home' component={ Home} />
            <Route path='/dash' component={ Dashboard }/> 
            <Route path='/timer' component={ Timer }/> 
            <Route path='/login' component={ Login } />
          </Switch>
        </div>
      </ Router>
      </ Provider>
      
    );
  }
}

export default App;
