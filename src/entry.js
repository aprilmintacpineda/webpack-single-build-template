/** @format */

import './styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import './test.scss';

import './registerServiceWorker';
import { render, Component } from 'inferno';
import loadAsyncComponent from 'inferno-async-component';
import { HashRouter, Switch, Route } from 'inferno-router';

// routes
import Home from './routes/Home';
import About from './routes/About';

const Topbar = loadAsyncComponent(
  import(/* webpackChunkName: 'Topbar' */ './navigations/Topbar')
);

class App extends Component {
  componentDidMount () {
    console.log('process.env.APP_TEST_OBJ_COMPLEX', process.env.APP_TEST_OBJ_COMPLEX);

    console.warn('This will be deleted'); // eslint-disable-line

    let a = 'Default value';

    /** @delete */
    a = 'new value';
    /** @enddelete */

    console.log('The value of a is', a); // eslint-disable-line
  };

  render () {
    return (
      <>
        <Topbar />
        <HashRouter>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" exact={true} component={About} />
          </Switch>
        </HashRouter>
      </>
    );
  };
}

render(<App />, document.getElementById('app'));
