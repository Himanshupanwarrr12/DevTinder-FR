import NavBar from "./ui/header/NavBar";
import Footer from "./ui/footer/Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Mainlayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const fetchUser = async () => {
    try {
      const res = await axios.get(baseUrl + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.error(error);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);

  return (
  <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Mainlayout;
