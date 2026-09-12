import Banner from "../components/Banner"
import Collections from "../components/Collections"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {Gents,Ladies} from "../data"
import {useState} from "react"
import WomenCollection from "../components/WomenCollection";

const MainPage = ({ onAccountClick }) => {

  const [gentsFashion] = useState(Gents);
  const [ladiesFashion] = useState(Ladies);
  return (
    <div>
        <Header onAccountClick={onAccountClick} />
        <Banner />
        <Collections gentsFashion={gentsFashion} />
        <WomenCollection ladiesFashion={ladiesFashion} />
        <Footer />
    </div>
  )
}

export default MainPage