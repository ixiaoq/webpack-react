import React, { Component } from 'react'

import './About.css'

import liqin from '@/assets/image/liqin.jpg'
import img1 from '@/assets/image/d1a.jpg'

export default class About extends Component {
  render () {
    return (
      <div className="page-about">
        <div className="title">hello About!</div>
        <div className="img-wrap">
          <img src={ liqin } />
          <img src={ img1 } />
        </div>
      </div>
    )
  }
}
