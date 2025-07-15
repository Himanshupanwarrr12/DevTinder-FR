import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './MainLayout';
import Login from './pages/Login'
import Feed from './pages/Feed';
import Profile from './pages/profile';

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
    },
    {
      path :'/profile',
      element:<Profile/>
    }
  ]
}])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
