import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import {
  BrowserRouter as Router,
  Link,
  match,
  Route
} from 'react-router-dom'

interface ITopicPathParam {
  topicId: string;
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
)

const Topic = (props: { match: match<ITopicPathParam> }) => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
)

const Dashboard = (props: { match: match<{}> }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${props.match.url}/:topicId`} component={Topic} />
    <Route exact={true} path={props.match.url} render={
      // tslint:disable-next-line:jsx-no-lambda
      () => (<h3>Please select a topic.</h3>)} />
  </div>
)


class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
        </Router>
      </Provider>
    );
  }
}





export default App;
