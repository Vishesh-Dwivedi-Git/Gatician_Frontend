import { ArrowRight, BarChart3, CheckCircle, Globe, Package, Users } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="bg-black py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-white">
            <span className="text-yellow-400">/</span> Retailer Tools
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Precision instrumentation for ONDC commerce
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Feature 1 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <BarChart3 className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Live Order Radar</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Real-time tracking across all ONDC channels with predictive analytics
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <Package className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Smart Inventory</h3>
            <p className="text-sm sm:text-base text-gray-400">
              AI-driven stock management with automated replenishment
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Buyer Intelligence</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Customer behavior modeling and retention forecasting
            </p>
          </div>
        </div>

        <div className="h-px bg-gray-800 my-8 sm:my-12 w-3/4 mx-auto"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Feature 4 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <Globe className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">ONDC Network</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Native integration with digital commerce protocols
            </p>
          </div>

          {/* Feature 5 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Quality Assurance</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Automated compliance checks and defect prevention
            </p>
          </div>

          {/* Feature 6 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <ArrowRight className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Instant Replenish</h3>
            <p className="text-sm sm:text-base text-gray-400">
              One-touch vendor ordering with smart recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}