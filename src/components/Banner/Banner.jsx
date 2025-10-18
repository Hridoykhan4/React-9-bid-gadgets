import bannerBg from "../../assets/Banner-min.jpg";
const Banner = () => {
  return (
    <div
      className="relative  bg-cover bg-center"
      style={{ backgroundImage: `url('${bannerBg}')` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative space-y-4 z-10 sm:py-20 sm:px-12 px-4 py-4 min-h-[400px]  text-white">
        <h1 className="sm:text-3xl text-xl font-bold">Bid on Unique <br /> Items from Around the World</h1>
        <p className="text-white/70 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam rerum deleniti inventore, asperiores <br /> maxime dolore quaerat amet facilis porro consequatur.</p>
        <button className="btn">Explore Auctions</button>
      </div>
    </div>
  );
};

export default Banner;
