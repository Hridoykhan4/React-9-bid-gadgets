import ActiveAuctions from "./components/ActiveAuctions/ActiveAuctions"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"

function App() {


  return (
    <>
     <header>
      <Navbar></Navbar>
      <Banner></Banner>
      <ActiveAuctions></ActiveAuctions>
     </header>
    </>
  )
}

export default App
