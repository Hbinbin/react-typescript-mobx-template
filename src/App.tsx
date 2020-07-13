import React from 'react'
import '@css/index.scss'
import { Provider } from 'mobx-react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard } from '@cps'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route component={Dashboard} />
    </Switch>
  </Router>
)

export default App
