import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './MainLayout';
import Login from './pages/Login'
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Connections from './pages/Connections';
import Requests from './pages/Requests';

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
    },
    {
      path:'/signup',
      element:<SignUp/>
    },
    {
      path:'/connections',
      element:<Connections/>
    },
    {
       path:'/requests',
      element:<Requests/>
    }
  ]
}])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
