import NavBar from './ui/header/NavBar'
import Footer from './ui/footer/Footer'
import { Outlet } from "react-router-dom"

function Mainlayout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Mainlayout