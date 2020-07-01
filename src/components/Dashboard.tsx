import React, { FC, lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

const Home = lazy(() => import('@pages/home/Home'))
const My = lazy(() => import('@pages/my/My'))
// interface
interface IProps extends IMobx {
}
interface IState {
}

const Name: FC<IProps> = ({ }) => {
  const initialState: IState = {
  }
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route path='/home' component={Home} />
          <Route path='/my' component={My} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Name
