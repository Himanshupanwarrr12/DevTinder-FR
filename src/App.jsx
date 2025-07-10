import {BrowserRouter, Routes,Route,Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './MainLayout';
import Home from './pages/Home';
import Login from './pages/Login'

const router  = createBrowserRouter([{
  path:'/',
  element : <Mainlayout/>,
  children:[
    {
      path :'/',
      element: <Home/>
    },
    {
      path:'/login',
      element: <Login/>
    }
  ]
}])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
