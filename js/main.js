import React from 'react'
import { Link } from 'react-router'
import ReactFire from 'reactfire'

export default React.createClass({

  render() {
    return(
      <section>
        <div>
          <h1 className="see-through">"Search For Your Perfect JavaWorks"
            <form>
              <input className="search__bar"
                     type="text"/>
              <input className="search__button"
                     type="submit"/>
            </form>
          </h1>
          <img alt="laptop"
               className="background_pic"
               src="styles/coffee_collage.png"/>
        </div>
        <div>
        </div>
      </section>
    )
  }
})
