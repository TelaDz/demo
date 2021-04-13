import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/index'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Button } from 'antd'

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <Router history={createBrowserHistory()}>
        <App />
        <Button>测试按钮</Button>
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)
