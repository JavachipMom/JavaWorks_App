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
          <li>
            <Link className="links"
                href="https://github.com/JavachipMom">Developers
            </Link>
          </li>
          <li>
            <Link className="links"
                href="http://shauricenicole.herokuapp.com/#/">Portfolio
            </Link>
          </li>
        </ul>
      </footer>
    )
  }
})
