import react from 'react'
import './App.css'
import { RouterProvider } from 'react-router'
import { myRouter } from './providers/router'

function App() {

  return (
    <>
   <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
