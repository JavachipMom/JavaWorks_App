import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return{
      results: [

      ]
    }
  },
  render() {
    // console.log("RENDER")
    // console.log("BUS:" + this.props.results)
    return(
      <section className="section">
        <div className="results__container">
          { this.props.results.map((business, i)=>{
            //console.log("I: " + i)
            return (
              <article className="results"
                       key={i}>
              <Link className="results__title" to={"/shops/" + business.id}>{business.name}</Link>
              <div>
                <h3 className="address"> Address: {business.location.address1} {business.location.address2} </h3>
                <h3 className="location"> {business.location.city}, {business.location.state} {business.location.zip_code} </h3>
                <h3 className="rating"> Rating: { business.rating } Stars </h3>
              </div>
                  <h3 className="phoneNumber1">Phone Number:<a href="tel:">{business.display_phone}</a></h3>
                <img alt="picture 1"
                     className="photo"
                     src= {business.image_url} />
              </article>
            )
           })
          }
        </div>
      </section>
    )
  }
})
