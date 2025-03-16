import React from 'react'

import './App.css'
import myStore from './store/Store'
import { myRouter } from './providers/router'
import { Provider } from 'react-redux'
import { PouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
    <Provider store={myStore}>
     <PouterProvider router={myRouter}/>
    </Provider>
    </>
  )
}

export default App
