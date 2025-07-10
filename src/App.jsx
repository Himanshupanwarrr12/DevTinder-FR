import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './MainLayout';
import Login from './pages/Login'
import Feed from './pages/Feed';

const router  = createBrowserRouter([{
  path:'/',
  element : <Mainlayout/>,
  children:[
    {
      path :'/',
      element: <Feed/>
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
