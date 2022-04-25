export default function SubscribeInfluencer() {
  return (
    <div className="flex flex-col items-center px-3 mt-2 md:mb-4">
      <button className="border-2 border-maf-pink bg-maf-pink text-white font-extrabold shadow-md text-center rounded-lg leading-5 w-full md:w-4/12 text-lg my-2">
        <div>SUBSCRIBE FOR $7.99</div> <div>for 1 month</div>
      </button>
      <button className="relative border-2 border-black bg-white text-black font-extrabold shadow-md text-left rounded-lg leading-5 w-full pl-3 pr-2 md:w-4/12 text-base my-2">
        <div>SUBSCRIBE FOR $38.35</div> <div>for 6 month</div>
        <div className="absolute right-3 top-0 bottom-0 bg-maf-pink rounded-full px-2">
          <span className="block text-white text-sm font-bold">20%</span>
          <span className="block text-white text-sm font-bold">OFF</span>
        </div>
      </button>
      <button className="relative border-2 border-black bg-white text-black font-extrabold shadow-md text-left rounded-lg leading-5 w-full pl-3 pr-2 md:w-4/12 text-base my-2">
        <div>SUBSCRIBE FOR $57.52</div> <div>for 12 month</div>
        <div className="absolute right-2 -top-2 -bottom-2 bg-maf-pink rounded-full py-1 px-3">
          <span className="block text-white text-base font-bold">45%</span>
          <span className="block text-white text-base font-bold">OFF</span>
        </div>
      </button>
    </div>
  );
}
