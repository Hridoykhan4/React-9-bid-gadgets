import { use } from "react";

const AuctionTable = ({ auctionPromise }) => {
  const items = use(auctionPromise);
  /*   {
    "id": "4",
    "title": "Rolex Submariner 16610",
    "description": "Iconic dive watch with automatic movement and stainless steel casing. A collector’s favorite.",
    "currentBidPrice": "$2,850",
    "timeLeft": "2 Days left",
    "bidsCount": 57,
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1"
  }, */
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="flex items-center  gap-3">
                  <div className="">
                    <img
                      src={item?.image}
                      className="w-12  rounded-full h-12 "
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>

                  <div>
                    <div className="font-bold">{item?.title}</div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">${item?.currentBidPrice}</td>
              <td>{item?.timeLeft}</td>
              <th>
                <button className="btn btn-ghost btn-sm">💘</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuctionTable;
