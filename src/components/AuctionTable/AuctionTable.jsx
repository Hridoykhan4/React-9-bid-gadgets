import { use, useEffect, useState } from "react";
import { Heart } from "lucide-react";

const AuctionTable = ({ auctionPromise, handleAddToFavorite, favorites }) => {
  const items = use(auctionPromise);
  const [bidItems, setBidItems] = useState(items || []);

  const handleClick = (item) => {
    handleAddToFavorite(item);
    setBidItems((prev) =>
      prev.map((p) => (p.id === item.id ? { ...p, isDisabled: true } : p))
    );
  };

  useEffect(() => {
    setBidItems((prev) =>
      prev.map((item) => ({
        ...item,
        isDisabled: favorites.some((fav) => fav.id === item.id),
      }))
    );
  }, [favorites]);

  return (
    <div className="overflow-x-auto mt-6">
      <table className="table table-zebra">
        {/* Head */}
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="text-left">Item</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th className="text-center">Favorite</th>
          </tr>
        </thead>

        <tbody>
          {bidItems?.map((item) => {
            return (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                {/* Item info */}
                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={item?.image}
                      className="w-14 h-14 rounded-full object-cover border"
                      alt={item?.title}
                    />
                    <div>
                      <div className="font-semibold text-gray-800">
                        {item?.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item?.category || "Collectible"}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Current Bid */}
                <td className="font-semibold text-gray-700">
                  {item?.currentBidPrice}
                </td>

                {/* Time Left */}
                <td className="text-gray-600">{item?.timeLeft}</td>

                {/* Favorite button */}
                <td className="text-center">
                  <button
                    onClick={() => handleClick(item)}
                    disabled={item?.isDisabled}
                    className={`btn btn-sm transition-all duration-200 ${
                      item?.isDisabled
                        ? "bg-pink-100 text-pink-500  cursor-not-allowed"
                        : "hover:bg-pink-50 text-gray-600 cursor-pointer"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        item?.isDisabled ? "fill-pink-500 text-pink-500 " : ""
                      }`}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AuctionTable;
