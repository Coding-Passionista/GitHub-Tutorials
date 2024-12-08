// app/services/page.jsx (For Next.js 13+)

export default function Services() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c1.1 0 1.99.9 1.99 2L14 18c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h4zm0-6a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Web Development</h3>
              <p className="text-gray-600 mt-2">
                We build responsive and interactive websites that meet your business needs.
              </p>
            </div>
          </div>
  
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c1.1 0 1.99.9 1.99 2L14 18c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h4zm0-6a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">SEO Optimization</h3>
              <p className="text-gray-600 mt-2">
                Enhance your website's visibility and ranking on search engines.
              </p>
            </div>
          </div>
  
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c1.1 0 1.99.9 1.99 2L14 18c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h4zm0-6a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Graphic Design</h3>
              <p className="text-gray-600 mt-2">
                We create stunning visual designs to represent your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  