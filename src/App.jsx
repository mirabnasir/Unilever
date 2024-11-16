import Navbar from "./Components/Navbar/Navbar"
import Welcome from "./Components/Welcome/Welcome"
import Article from "./Components/Articles/Article"
import Contact from "./Components/Contact/Contact"
import InfoCards from "./Components/InfoCards/InfoCards"
import ReportPage from "./Components/ReportPage/ReportPage"
import ExploreBrands from "./Components/ExploreBrands/ExploreBrands"
import Footer from "./Components/Footer/footer"
function App() {


  return (
    <>
      <Navbar/>
      <Welcome/>
      <Article/>
      <ExploreBrands/>
      <ReportPage/>
      <InfoCards/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
