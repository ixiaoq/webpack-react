import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Bundle from './Bundle'

import Home from 'bundle-loader?lazy&name=home!@/pages/Home/Home'
import About from 'bundle-loader?lazy&name=about!@/pages/About/About'
import Counter from 'bundle-loader?lazy&name=counter!@/pages/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=userinfo!@/pages/UserInfo/UserInfo'

const Loading = function () {
  return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
      {
          (Component) => Component ? <Component {...props} /> : <Loading/>
      }
  </Bundle>
);

export default function getRouter () {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/userInfo">UserInfo</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={ createComponent(Home) } />
          <Route path="/about" component={ createComponent(About) } />
          <Route path="/counter" component={ createComponent(Counter) } />
          <Route path="/userInfo" component={ createComponent(UserInfo) } />
        </Switch>
      </div>
    </Router>
  )
}
