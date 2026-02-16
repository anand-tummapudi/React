import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './module/index.jsx'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
