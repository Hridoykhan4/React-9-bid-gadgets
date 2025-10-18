import { toast } from "react-toastify";
import ActiveAuctions from "./components/ActiveAuctions/ActiveAuctions";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [bidsAmounts, setBidsAmount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const handleAddToFavorite = (product) => {
    setFavorites([...favorites, product]);
    setBidsAmount((prev) => prev + product.currentBidPrice);
    toast("🦄 Items added to your favorite list !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleRemoveFavorites = (id, bidPrice) => { 
    setBidsAmount((prev) => prev - bidPrice);
    setFavorites((prev) => prev.filter((p) => p.id !== id));
    toast("🦄 Successfully removed from your favorite list !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
        <ActiveAuctions
          handleRemoveFavorites={handleRemoveFavorites}
          favorites={favorites}
          bidsAmounts={bidsAmounts}
          handleAddToFavorite={handleAddToFavorite}
        ></ActiveAuctions>
      </header>
    </>
  );
}

export default App;
