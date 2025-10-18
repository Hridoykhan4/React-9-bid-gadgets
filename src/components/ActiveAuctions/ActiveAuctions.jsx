import { Suspense } from "react";
import AuctionTable from "../AuctionTable/AuctionTable";
import BidItems from "../BidItems/BidItems";

const ActiveAuctions = ({
  handleAddToFavorite,
  bidsAmounts,
  favorites,
  handleRemoveFavorites,
}) => {
  const auctionPromise = fetch("./bidItems.json").then((res) => res.json());

  return (
    <div className="mt-5 w-11/12 py-10   mx-auto">
      <div className="space-y-2">
        <h2 className="font-semibold text-lg">Active Auctions</h2>
        <p>Discover and bid on extraordinary items</p>
      </div>
      <div className="flex mt-6 flex-col-reverse sm:flex-row gap-4">
        <div className="sm:w-3/4">
          <Suspense fallback={<p>Loading ... </p>}>
            <AuctionTable
              favorites={favorites}
              handleAddToFavorite={handleAddToFavorite}
              auctionPromise={auctionPromise}
            ></AuctionTable>
          </Suspense>
        </div>
        <div className="sm:w-1/4">
          <BidItems
            handleRemoveFavorites={handleRemoveFavorites}
            favorites={favorites}
            bidsAmounts={bidsAmounts}
          ></BidItems>
        </div>
      </div>
    </div>
  );
};

export default ActiveAuctions;
