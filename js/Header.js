import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  componentDidMount() {
    this.setState({provider: new firebase.auth.GoogleAuthProvider()});

  firebase.auth().onAuthStateChanged((user) => {
      if (user) { // Signed in successfully
        var signOutButton = document.querySelector("[data-js='nav__signOut']")
        if (signOutButton.className == "nav__signOut--hide") {
          signOutButton.className = "nav__signOut";
        }
        var currentUser = {};
        var today = new Date();

        currentUser["/users/" + user.uid] = {
          email: user.email,
          name: user.displayName,
          picture: user.photoURL,
          lastLogin: today
        }

        this.setState({
          currentName: user.email,
          name: user.displayName,
          picture: user.photoURL,
          lastLogin: user.lastLogin
        })
      }
  else { // signed out or something went wrong
      var signOutButton = document.querySelector("[data-js='nav__signOut']")
      if(signOutButton.className == "nav__signOut"){
        signOutButton.className = "nav__signOut--hide"
        }
      }
    })
  },
  getInitialState() {
    return {
      provider: () => {},
      currentName: "Not logged in",
      name: "",
      picture: ""
    }
  },
  signUserIn() {
    firebase.auth().signInWithRedirect(this.state.provider);
    firebase.auth().getRedirectResult().then((result) => {
      if(result.credential) {
        var token = result.credential.accessToken;
      }
      var user = result.user;
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
   },
   signUserOut() {
     firebase.auth().signOut().then(() => {
       this.setState({
         currentName: "Not logged in",
         picture: "",
         name: ""
       })
    })
},
  render() {
    return(
      <header>
        <nav>
          <Link to="/">
            <img alt="logo"
                 className="logo"
                 src="styles/logo2.png"/>
             </Link>
         <div>
          <img className="nav__currentUserImage"
               src={this.state.picture} />
          <button className="nav__signIn"
                   data-js="nav__signIn"
                   onClick={this.signUserIn}> Log In
          </button>
          <button className="nav__signOut--hide"
                   data-js="nav__signOut"
                   onClick={this.signUserOut}> Log Out
          </button>
         </div>
        </nav>
      </header>
    )
  }
})
