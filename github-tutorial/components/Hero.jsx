// components/Hero.jsx

export default function Hero() {
  return (
    <section className="relative bg-blue-500 text-white h-screen flex items-center justify-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your-image.jpg")' }}></div>
      
      {/* Hero Content */}
      <div className="relative text-center max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          We provide awesome services that help your business grow. Let's work together!
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-500 hover:bg-gray-100 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
