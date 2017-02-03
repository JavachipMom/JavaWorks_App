import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return(
      <footer className="footer">
        <h4 className="copyright"> Copyright 2017 </h4>
        <ul>
          <li className="links">Contact</li>
          <li className="links">About us</li>
          <li className="links">Developers</li>
          <li className="links">Portfolio</li>
        </ul>
      </footer>
    )
  }
})
