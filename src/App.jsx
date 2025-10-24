import { toast } from "react-toastify";
import ActiveAuctions from "./components/ActiveAuctions/ActiveAuctions";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { addToDB, removeFromDB } from "./utils/localDB";

function App() {
  const [bidsAmounts, setBidsAmount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const handleAddToFavorite = (product) => {
    addToDB(product.id);
    setFavorites([...favorites, product]);

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

  useEffect(() => {
    setBidsAmount(favorites.reduce((acc, val) => acc + val.currentBidPrice, 0));
  }, [favorites])

  const handleRemoveFavorites = (id) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
    removeFromDB(id);
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
      </header>
      <main>
        <ActiveAuctions
          handleRemoveFavorites={handleRemoveFavorites}
          favorites={favorites}
          setFavorites={setFavorites}
          bidsAmounts={bidsAmounts}
          handleAddToFavorite={handleAddToFavorite}
        ></ActiveAuctions>
      </main>
    </>
  );
}

export default App;
