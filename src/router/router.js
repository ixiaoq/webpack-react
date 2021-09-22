import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'
import Counter from '@/pages/Counter/Counter'
import UserInfo from '@/pages/UserInfo/UserInfo'

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
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/counter" component={ Counter } />
          <Route path="/userInfo" component={ UserInfo } />
        </Switch>
      </div>
    </Router>
  )
}
