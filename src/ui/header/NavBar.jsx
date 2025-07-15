import axios from 'axios';
import {  Link, NavLink } from 'react-router-dom';
import { baseUrl } from '../../utils/constant';
import { useDispatch } from 'react-redux';
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
  
  return (
    <div className="navbar bg-slate-800 shadow-sm">
      <div className="flex-1">
        <NavLink to='/' className="btn btn-ghost text-white text-2xl">🧑‍💻 DevTinder </NavLink>
      </div>
      <div className="flex p-2.5">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn mr-4 btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link>Settings</Link></li>
            <li><Link onClick={handleLogout} >Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;