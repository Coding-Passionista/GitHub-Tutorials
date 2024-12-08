// app/about/page.jsx (For Next.js 13+)

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
      
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side: Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600">
            We are a passionate team dedicated to providing high-quality services in web development, design, and digital marketing. Our mission is to create exceptional experiences for our clients and help them grow their businesses online.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            With years of expertise and a love for innovation, we always strive to deliver solutions that not only meet but exceed expectations.
          </p>
        </div>

        {/* Right Side: Image Section */}
        <div className="md:w-1/2">
          <img
            src="/path/to/your/image.jpg" // Update with the actual image path
            alt="About Us Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-12 text-center">
        <a href="/contact">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200">
            Get in Touch
          </button>
        </a>
      </div>
    </div>
  );
}
