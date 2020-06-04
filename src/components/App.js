import React from 'react'
import Radium from 'radium'
import Line from './Line.js'
import Page from './Page.js'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/line">
              <Line />
            </Route>
            <Route path="/page">
              <Page />
            </Route>
            <Route path="/">
              <Line />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  
}

export default Radium(App);
