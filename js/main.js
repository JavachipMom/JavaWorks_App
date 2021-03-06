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
  // In the React documentation I had a click event inside a click event and needed to take the other function out to make it work and have e defined..
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
    // FIXME: Get the select option dropdown to work properly after the demo day.
    // <select className="select__options">
    //   <option className="options"
    //           value="faster wifi">Faster Wifi
    //   </option>
    //   <option className="options"
    //           value="comfort level">Comfort Level
    //   </option>
    //   <option className="options"
    //           value="noise level">Noise Level
    //   </option>
    // </select>
  },
  render() {
    return(
      <section>
        <div>
          <h1 className="line-1 anim-typewriter">"Search For Your Perfect JavaWorks"
          </h1>
            <form className="form"
                  onSubmit={this.handleSubmit}>
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
