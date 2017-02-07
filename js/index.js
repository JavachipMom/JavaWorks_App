import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Main from './main'
import Results from './results'
import Results2 from './results2'
import Results3 from './results3'
import Results4 from './results4'

render(
  (
   <Router history={hashHistory}>
     <Route component={App}>
       <Route path="/" component={Main} />
       <Route path="results" component={Results} />
       <Route path="results2" component={Results2} />
       <Route path="results3" component={Results3} />
       <Route path="results4" component={Results4} />
     </Route>
   </Router>
  ),
  document.getElementById('app')
)
