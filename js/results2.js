import React from 'react'
import { Link } from 'react-router'
import { ajax, post, parseJSON } from 'jquery'
import Slider from 'react-slick'

export default React.createClass({
  getInitialState(){
    return{
      data: {

      }
    }
  },
  componentWillMount() {
    //FIXME:
    // 1. Make ajax call using this.props.params.idName
    // 2. Use setState() to save results
    // 3. In render() use this.state.... whatever from saved results
    var business = this.props.params.idName
    ajax({
      url: 'businessdata.json?id=' + business,
      success: (data) => {
        console.log("this should show", data);
        this.setState({data:data});
        this.setState({
          idName: data.idName
        })
      }
    })
  },
 //  initMap() {
 //    var uluru = {lat: 29.4359881103497, lng: -98.4804011200274};
 //    var map = new google.maps.Map(document.getElementById('map'), {
 //      zoom: 15,
 //      center: uluru
 //    });
 //    var marker = new google.maps.Marker({
 //      position: uluru,
 //      map: map
 //  });
 // },
  render() {
    var images = []
    if (this.state.data.photos) {
      images = this.state.data.photos
    }
    var address = []
    if (this.state.data.location) {
      address = this.state.data.location.display_address
    }
    return(
      <section className="section">
        <div className="result_page">
          <h1 className="business_name"> { this.state.data.name } </h1>
          <div className="photo_container">
          {images.map((photo, i) => {
                 return(
                   <div className="dropdown">
                     <img className="yelp_photos"
                          key={i}
                          src= {photo} />
                        <div className="dropdown_content">
                       <img className="yelp_photos1"
                            key={i}
                            src= {photo} />
                     </div>
                   </div>
                 )
               })}
          </div>
          <h2 className="address1"> Address:
            { address.map((line, i) => {
              return(
              <p className="addresses"
                 key={i}>{line}
              </p>
              )
            })}
          </h2>
          <h2 className="phoneNumber"> Phone Number: <a href="tel:">{ this.state.data.display_phone }</a></h2>
          <h2 className="price"> Price range: </h2>
          <h2 className="pricePoint"> { this.state.data.price } </h2>
        </div>
      </section>
    )
  }
})
