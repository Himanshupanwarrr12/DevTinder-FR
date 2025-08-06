import axios from 'axios';
import {  Link, NavLink } from 'react-router-dom';
import { baseUrl } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async()=>{
    try {
      await axios.post(baseUrl+"/logout", {},{withCredentials:true})
    dispatch(removeUser())
   return navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  const user = useSelector((store) => store.user)
  
  return (
    <div className="navbar bg-slate-800 shadow-sm">
      <div className="flex-1">
        <NavLink to='/' className="btn btn-ghost text-white text-2xl">🧑‍💻 DevMatch </NavLink>
      </div>
      <div className="flex justify-center items-center p-2.5">
        {user &&(  <h1 className='text-white mr-4 ' >Welcome, {user?.firstName}</h1>)}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn mr-4 btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="your profile"
                src={user?.photoUrl || "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1"}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between text-xl ">
                Profile
              </Link>
            </li>
            <li><Link className=' text-xl'  to="/connections" >Connections</Link></li>
            <li><Link className=' text-xl' to="/requests" >Requests</Link></li>
            <li><Link className=' text-xl' onClick={handleLogout} >Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;