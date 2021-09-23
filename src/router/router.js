import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Bundle from './Bundle'
import Loading from '@/components/Loading/Loading'

import Home from 'bundle-loader?lazy&name=home!@/pages/Home/Home'
import About from 'bundle-loader?lazy&name=about!@/pages/About/About'
import Counter from 'bundle-loader?lazy&name=counter!@/pages/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!@/pages/UserInfo/UserInfo'
import NotFound from 'bundle-loader?lazy&name=notFound!@/pages/NotFound/NotFound'


const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading/>
    }
  </Bundle>
)

export default function getRouter () {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ createComponent(Home) } />
        <Route path="/about" component={ createComponent(About) } />
        <Route path="/counter" component={ createComponent(Counter) } />
        <Route path="/userInfo" component={ createComponent(UserInfo) } />
        <Route component={ createComponent(NotFound) } />
      </Switch>
    </div>
  )
}
