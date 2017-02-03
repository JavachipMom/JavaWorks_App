import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    return(
      <section className="section">
        <div className="results__container">
          <article className="results">
            <h2 className="results__title"> Rosella Coffee Shop </h2>
            <h3 className="address">203 E Jones Ave
                Unit 101
                San Antonio, TX 78215
            </h3>
            <ul className="hours">
              <li>Sunday 8:00 AM - 6:00 PM </li>
              <li>Monday - Thursday 7:00 AM - 9:00 PM </li>
              <li>Friday - Saturday 7:00 AM - 10:00 PM </li>
            </ul>
            <img alt="picture 1"
                 className="photo"
                 src="styles/coffeeshop.jpg"/>
          </article>
          <article className="results">
            <h2 className="results__title"> Rosella Coffee Shop </h2>
            <h3 className="address">203 E Jones Ave
                Unit 101
                San Antonio, TX 78215
            </h3>
            <ul className="hours">
              <li>Sunday 8:00 AM - 6:00 PM </li>
              <li>Monday - Thursday 7:00 AM - 9:00 PM </li>
              <li>Friday - Saturday 7:00 AM - 10:00 PM </li>
            </ul>
            <img alt="picture 2"
                 className="photo"
                 src="styles/coffeeshop.jpg"/>
          </article>
          <article className="results">
            <h2 className="results__title"> Rosella Coffee Shop </h2>
            <h3 className="address">203 E Jones Ave
                Unit 101
                San Antonio, TX 78215
            </h3>
            <ul className="hours">
              <li>Sunday 8:00 AM - 6:00 PM </li>
              <li>Monday - Thursday 7:00 AM - 9:00 PM </li>
              <li>Friday - Saturday 7:00 AM - 10:00 PM </li>
            </ul>
            <img alt="picture 3"
                 className="photo"
                 src="styles/coffeeshop.jpg"/>
          </article>
          <article className="results">
            <h2 className="results__title"> Rosella Coffee Shop </h2>
            <h3 className="address">203 E Jones Ave
                Unit 101
                San Antonio, TX 78215
            </h3>
            <ul className="hours">
              <li>Sunday 8:00 AM - 6:00 PM </li>
              <li>Monday - Thursday 7:00 AM - 9:00 PM </li>
              <li>Friday - Saturday 7:00 AM - 10:00 PM </li>
            </ul>
            <img alt="picture 4"
                 className="photo"
                 src="styles/coffeeshop.jpg"/>
          </article>
        </div>
        <ul className="pagination">
          <li><Link to="/results"href="#">«</Link></li>
          <li><Link to="/results"href="#">1</Link></li>
          <li><Link to="/results2"href="#">2</Link></li>
          <li><Link to="/results3"href="#">3</Link></li>
          <li><Link to="/results4"href="#">4</Link></li>
          <li><Link to="/results5"href="#">5</Link></li>
          <li><Link to="/results6"href="#">6</Link></li>
          <li><Link to="/results"href="#">»</Link></li>
        </ul>
      </section>
    )
  }
})
