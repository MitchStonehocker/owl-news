// client/src/src/components/layouts/Layout.jsx

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Layout extends Component {
  render () {
    return (
      <div>
        <div>
          <h1>MadOwlNews.com - Breaking news about Mad Owls</h1>
        </div>
        <h6>this.props.children</h6>
        <div>{this.props.children}</div>
        <h6>Link</h6>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Layout
