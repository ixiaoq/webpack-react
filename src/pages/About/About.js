import React, { Component } from 'react'

import style from './About.css'

import liqin from '@/assets/image/liqin.jpg'
import img1 from '@/assets/image/d1a.jpg'

export default class About extends Component {
  render () {
    return (
      <div className={ style.pageAbout }>
        <div className="title">hello About!</div>
        <div className={ style.imgWrap }>
          <img src={ liqin } />
          <img src={ img1 } />
        </div>
      </div>
    )
  }
}
