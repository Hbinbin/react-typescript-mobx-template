import React from 'react'
import '@css/index.scss'
import { Provider } from 'mobx-react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import rootMobx from '@mobx/rootMobx'
import { Dashboard } from '@cps'

const App: React.FC = () => (
  <Provider {...rootMobx}>
    <Router>
      <Switch>
        <Route component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
)

export default App
