import { Activity, ArrowUp, BarChart3, Globe } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-white">
            <span className="text-yellow-400">/</span> How GATICIAN Works
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Streamlined tools to manage your retail supply chain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 relative">
          {/* Vertical Separator */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-600/50"></div>

          {/* Step 1 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <Globe className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Connect ONDC</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Seamlessly link your ONDC seller account
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <Activity className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Monitor Orders</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Track orders in real-time from placement to delivery
            </p>
          </div>

          {/* Horizontal Separator */}
          <div className="md:col-span-2 h-px bg-gray-600/50 w-3/4 mx-auto my-6 sm:my-8"></div>

          {/* Step 3 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <BarChart3 className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white black mb-2">Analyze Trends</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Use analytics to optimize your supply chain
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <ArrowUp className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Scale Business</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Grow with insights and expanded reach
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}