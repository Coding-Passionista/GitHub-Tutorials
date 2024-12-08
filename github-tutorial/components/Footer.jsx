// components/Footer.jsx

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Section: Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
            </div>
  
            {/* Right Section: Social Media Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path
                    d="M22 12.4C22 5.6 17.7 1 12 1 6.3 1 2 5.6 2 12.4c0 5.4 3.8 9.8 8.7 10.8v-7.6H8.6v-3.2h2.1V9.3c0-2.1 1.2-3.3 3.1-3.3.9 0 1.8.1 2.5.3v2.8h-1.7c-1.3 0-1.6.6-1.6 1.4v2.2h3.1l-.4 3.2h-2.7v7.7C18.2 22.2 22 17.8 22 12.4z"
                  />
                </svg>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path
                    d="M23 3a10.7 10.7 0 0 1-3.03.83 4.87 4.87 0 0 0 2.14-2.68c-.89.53-1.88.92-2.93 1.13a4.86 4.86 0 0 0-8.29 4.42A13.8 13.8 0 0 1 1.6 2.62a4.83 4.83 0 0 0 1.51 6.49A4.85 4.85 0 0 1 .5 8.71v.05a4.84 4.84 0 0 0 3.88 4.75 4.85 4.85 0 0 1-2.2.08 4.86 4.86 0 0 0 4.53 3.37A9.7 9.7 0 0 1 0 19.54a13.7 13.7 0 0 0 7.46 2.19c8.96 0 13.9-7.42 13.9-13.85 0-.21 0-.42-.02-.63A9.94 9.94 0 0 0 23 3z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path
                    d="M4.98 3.5C4.98 4.88 3.88 5.98 2.5 5.98 1.12 5.98 0 4.88 0 3.5S1.12 1.02 2.5 1.02C3.88 1.02 4.98 2.12 4.98 3.5zM0 6.73v17.76h5.06V6.73H0zm9.88 8.14h5.06V6.73h-5.06v1.1h-3.75v1.65h3.75v4.62z"
                  />
                </svg>
              </a>
            </div>
          </div>
  
          {/* Footer Links */}
          <div className="mt-4 text-center">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-4">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-4">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  }
  