import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import myStore from './store/Store.js'
import {I18nextProvider } from "react-i18next";
import i18next from 'i18next'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <I18nextProvider i18next={i18next}>
      <App />
      </I18nextProvider>
    </Provider>
  </StrictMode>,
)
