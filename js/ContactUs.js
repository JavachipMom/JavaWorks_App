import React from 'react'
import { Link } from 'react-router'
import ReactFire from 'reactfire'

export default React.createClass({

  render() {
    return(
      <article>
        <h2> Send Us a E-mail to let us know about anything on your mind </h2>
        <form action="mailto:nicolesp4ever@yahoo.com"
              encType="text/plain"
              method="post">
          Name:<br/>
          <input name="name"
                 size="50"
                 type="text"/><br/>
          E-mail:<br/>
          <input name="mail"
                 size="50"
                 type="text"/><br/>
          Comment:<br/>
          <textarea className="commentBox"
                    name="comment"
                    size="50"
                    type="text">
          </textarea><br/><br/>
          <input className="submit_button"
                 type="submit"
                 value="send"/>
          <input className="reset_button"
                 type="reset"
                 value="reset"/>
        </form>
      </article>
    )
  }
})
