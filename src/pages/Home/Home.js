import React, { Component } from 'react'

export default class HOme extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAddCount () {
    this.setState({
      count: ++this.state.count
    })
  }
  render () {
    return (
      <div>
        <div>hello Home!</div>
        <div>当前计数：{ this.state.count }</div>
        <button onClick={() => this.handleAddCount()}>自增</button>
      </div>
    )
  }
}
