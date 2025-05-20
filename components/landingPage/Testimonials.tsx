import { User } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-white">
            <span className="text-yellow-400">/</span> Customer Stories
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Retailers thriving with GATICIAN
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Testimonial 1 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <User className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Rahul Sharma</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">Fashion Retailer</p>
            <p className="text-sm sm:text-base text-gray-400">
              "Real-time tracking cut delivery times by 30%."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <User className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Ananya Patel</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">Electronics Store Owner</p>
            <p className="text-sm sm:text-base text-gray-400">
              "Customer insights tailored our inventory to demand."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="text-center px-4">
            <div className="flex justify-center mb-4">
              <User className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Vikram Kumar</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">Grocery Chain Manager</p>
            <p className="text-sm sm:text-base text-gray-400">
              "Reduced inventory costs by 25% with seamless ONDC integration."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}