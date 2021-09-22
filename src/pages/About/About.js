import React, { Component } from 'react'

import './About.css'

import liqin from '@/assets/image/liqin.jpg'
import img1 from '@/assets/image/d1a.jpg'

export default class About extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="page-about">hello About!</div>
        <img src={ liqin } />
        <img src={ img1 } />
      </React.Fragment>
    )
  }
}
