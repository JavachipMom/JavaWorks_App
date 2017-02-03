import React from 'react'
import { Link } from 'react-router'
import ReactFire from 'reactfire'

export default React.createClass({
  onSubmit(){
    console.log("I don't know where else to go")
  },

  render() {
    return(
      <section>
        <div>
          <h1 className="see-through">"Search For Your Perfect JavaWorks"
            <form>
              <select className="select__options">
                <option className="options"
                        value="faster wifi">Faster Wifi
                </option>
                <option className="options"
                        value="comfort level">Comfort Level
                </option>
                <option className="options"
                        value="noise level">Noise Level
                </option>
              </select>
              <input className="search__bar"
                     onChange={this.onResults}
                     placeholder="Type zip code here"
                     type="text"/>
              <input className="search__button"
                     onClick={this.onSubmit}
                     type="submit"
                     value="submit"/>
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
