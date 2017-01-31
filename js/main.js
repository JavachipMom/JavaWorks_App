import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return(
      <section>
        <div>
          <h1 className="see-through">"Search For Your Perfect JavaWorks"</h1>
          <img alt="laptop"
               className="background_pic"
               src="styles/coffee_collage.png"/>
             <form>
               <input></input>
             </form>
        </div>
      </section>
    )
  }
})
