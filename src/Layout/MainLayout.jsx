import { Outlet } from "react-router-dom"
import Navbar from '../components/shared/Navbar'
import Header from '../components/shared/Header'
import MarqueeMsgSection from '../components/shared/MarqueeMsgSection'
import Contact from '../components/shared/Contact'
import AboutUs from '../components/shared/AboutUs'
import Footer from '../components/shared/Footer'

const MainLayout = () => {
  return (<>
    <Header />
    <Navbar />
    <MarqueeMsgSection />
    <Outlet />
    <Contact />
    <AboutUs />
    <Footer />
  </>)
}
export default MainLayout