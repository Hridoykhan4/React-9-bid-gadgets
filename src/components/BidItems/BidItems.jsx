import { X } from "lucide-react";

const BidItems = ({ bidsAmounts, favorites, handleRemoveFavorites }) => {
  return (
    <div className="bg-white text-black px-3 py-4">
      <h2 className="text-primary font-bold text-center">
        💕Favorite Items {favorites?.length > 0 && `: ${favorites?.length}`}
      </h2>
      <div className="border my-2 border-black/80"></div>

      {!favorites?.length ? (
        <div className="py-4 px-2 flex justify-center flex-col items-center space-y-2">
          <h2 className="text-lg font-semibold">No Favorites Yet</h2>
          <p>Click the heart icon to add as favorite</p>
        </div>
      ) : (
        favorites?.map((f) => (
          <div
            className="border flex my-4 gap-3 items-center border-black rounded-xl py-3 px-3"
            key={f.id}
          >
            <img
              src={f.image}
              className="w-16 h-16 object-cover rounded border"
              alt=""
            />
            <div className="flex-1">
              <p className="font-semibold">{f.title.slice(0, 15)}...</p>
              <p>${f.currentBidPrice}</p>
              <p>Bids: {f.bidsCount}</p>
            </div>

            <div>
              <button
                onClick={() => handleRemoveFavorites(f.id)}
                className="btn btn-xs"
              >
                <X></X>
              </button>
            </div>
          </div>
        ))
      )}

      <div className="border my-2 border-black/80"></div>

      <div className="py-3 flex justify-between">
        <p>Total Bids Amount:</p>
        <p className="font-bold">$ {bidsAmounts}</p>
      </div>
    </div>
  );
};

export default BidItems;
