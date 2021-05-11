import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/index'
<<<<<<< HEAD
import { Router, Switch } from 'react-router-dom'
=======
import { BrowserRouter as Router, Switch } from 'react-router-dom'
>>>>>>> main
import { createBrowserHistory } from 'history'
import { Button } from 'antd'

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
