import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import { Provider } from "react-redux"
import { reducer } from "./store/reducers.js"
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store =  createStore(reducer, {
  source: 'icon',
  icon: '',
  padding: 20,
  foreground: '#000',
  background: '#fff',
  shape: 'none',
  effect: 'none',
  export: 'favicon',
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker()
