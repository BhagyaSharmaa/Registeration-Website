import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  'https://i.pinimg.com/originals/9d/2a/f7/9d2af723a76cb9c8eab981c535105144.jpg',
  'https://rahuleducation.org/wp-content/uploads/2022/11/Ayurveda-scaled.jpg',
  'https://www.keralatourism.org/images/ayurveda/static-banner/large/Ayurvedic_Medicines-14112019062248.jpg',
  'https://th.bing.com/th/id/OIP.Xc7bJ9tMtHBx5q95rE-9dwHaEK?rs=1&pid=ImgDetMain',
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Slide changes every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const logoUrl = 'https://www.shutterstock.com/shutterstock/photos/463691687/display_1500/stock-vector-colored-herbal-medicine-bowl-vector-drawing-463691687.jpg';

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://2.bp.blogspot.com/-GCSj6LSo4hg/XL7idXULnUI/AAAAAAAAACQ/YYAr9Tby0ikN6fERQqrjPnVkliSVASiYQCLcBGAs/s1600/ayurveda-background-3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden'
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 right-0 m-4 flex items-center bg-[#4a773c] bg-opacity-80 p-4 rounded-md w-full">
        <img src={logoUrl} alt="Logo" className="h-12" />
        <div className="ml-auto flex gap-4">
          <Link to="/registration-form">
            <button className="bg-[#4a773c] text-white rounded-md px-4 py-2 text-lg font-semibold transition-colors hover:bg-[#2d4734]">
              Startup Registration
            </button>
          </Link>
          <Link to="/login-user">
            <button className="bg-[#4a773c] text-white rounded-md px-4 py-2 text-lg font-semibold transition-colors hover:bg-[#2d4734]">
              Login
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-[#4a773c] text-white rounded-md px-4 py-2 text-lg font-semibold transition-colors hover:bg-[#2d4734]">
              About
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-[#4a773c] text-white rounded-md px-4 py-2 text-lg font-semibold transition-colors hover:bg-[#2d4734]">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>

      {/* Image Slider */}
      <div className="mt-16 flex items-center justify-center h-96 w-full">
        <img
          src={slides[currentSlide]}
          alt="Slider"
          className="w-full md:w-3/4 h-full object-cover rounded-lg transition-opacity duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Home;
