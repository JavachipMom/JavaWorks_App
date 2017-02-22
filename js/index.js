import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Main from './main'
import Results from './results'
import Results2 from './results2'
import ContactUs from './ContactUs'


render(
  (
   <Router history={hashHistory}>
     <Route component={App}>
       <Route path="/" component={Main} />
       <Route path="results" component={Results} />
       <Route path="/shops/:idName" component={Results2} />
       <Route path="/ContactUs" component={ContactUs} />
     </Route>
   </Router>
  ),
  document.getElementById('app')
)
