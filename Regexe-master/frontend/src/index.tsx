import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Nav from './components/Nav-bar';
import Tools from './components/Tools';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

ReactDOM.render(
  <Contact />,
  document.getElementById('contact') as HTMLElement
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer') as HTMLElement
);

ReactDOM.render(
  <Login />,
  document.getElementById('login') as HTMLElement
);

ReactDOM.render(
  <Nav />,
  document.getElementById('nav') as HTMLElement
);

ReactDOM.render(
  <Tools />,
  document.getElementById('tools') as HTMLElement
);

registerServiceWorker();
