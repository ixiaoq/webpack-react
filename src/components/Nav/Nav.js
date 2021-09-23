import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/userInfo">UserInfo</Link></li>
      </ul>
    )
  }
}
