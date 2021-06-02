import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/index'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Button } from 'antd'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={createBrowserHistory()}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
