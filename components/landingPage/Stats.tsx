export default function Statictics() {
  return (
    <section className="bg-black py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-x-0 sm:divide-x divide-gray-800">
          <div className="text-center px-4 py-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-yellow-400 mb-1">
              5,000<span className="text-white">+</span>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm tracking-widest font-medium">
              RETAILERS
            </div>
          </div>
          <div className="text-center px-4 py-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-yellow-400 mb-1">
              1<span className="text-white">M+</span>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm tracking-widest font-medium">
              ORDERS TRACKED
            </div>
          </div>
          <div className="text-center px-4 py-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-yellow-400 mb-1">
              98<span className="text-white">%</span>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm tracking-widest font-medium">
              DELIVERY SUCCESS
            </div>
          </div>
          <div className="text-center px-4 py-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-yellow-400 mb-1">
              24<span className="text-white">/7</span>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm tracking-widest font-medium">
              SUPPORT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}