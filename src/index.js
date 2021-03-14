import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
            <Router history={createBrowserHistory()}>
                <App />
            </Router>
        </Suspense>
    </Provider>,
    document.getElementById('root')
)
