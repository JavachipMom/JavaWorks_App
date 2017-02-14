import React from 'react'
import { Link } from 'react-router'
import { ajax, post, parseJSON } from 'jquery'
import ReactFire from 'reactfire'
import Yelp from 'yelp'
import Results from './results'

export default React.createClass({
  getInitialState(){
    // This means, that in your other functions, this.state.searchResults will be an array
    // FIXME: Put two "fake" search results in searchResults array
    return {
      businesses: [

      ]
    }
  },
  onSubmit(e){
      e.preventDefault();
      console.log("The button was clicked!!");
    // Created a variable to reference the zipcode input
    var zipcode = this.refs.zipcodeInput.value
    console.log(zipcode);
    ajax({
      url: 'yelpdata.json?zip=' + zipcode,
      success: (data) => {
        console.log(data);
        this.setState({
          businesses: data.businesses
        })
      }
    })

    //FIXME: Implement this! See: https://github.com/tiy-sat/fall16-8.4-player-stats/blob/master/js/Stats.js
    // 1) Get data from form - zip code, for instance
    // 2) Make ajax() call to /yelpdata.json?zip={zipcode from form}
    // 3) In "success" callback for ajax all, set up data and call setState()
  },
  render() {
    return(
      <section>
        <div>
          <h1 className="see-through"
              data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>"Search For Your Perfect JavaWorks"
              <span className="wrap"></span>
            <form onSubmit={this.handleSubmit}>
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
                     onChange={this.handleChange}
                     placeholder="Type zip code here"
                     ref = "zipcodeInput"
                     type="text"
                     value={this.state.value}/>
              <input className="search__button"
                     onClick={ this.onSubmit }
                     type="submit"
                     value="submit"/>
            </form>
          </h1>
          <img alt="laptop"
               className="background_pic"
               src="styles/coffee_collage.png"/>
        </div>
        <div>
          <Results results={ this.state.businesses } />
        </div>
      </section>
    )
  }
})
