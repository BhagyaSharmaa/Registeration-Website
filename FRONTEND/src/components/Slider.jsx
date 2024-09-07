import { useState, useEffect } from 'react';

const slides = [
  'https://i.pinimg.com/originals/9d/2a/f7/9d2af723a76cb9c8eab981c535105144.jpg',
  'https://rahuleducation.org/wp-content/uploads/2022/11/Ayurveda-scaled.jpg',
  'https://www.keralatourism.org/images/ayurveda/static-banner/large/Ayurvedic_Medicines-14112019062248.jpg',
  'https://th.bing.com/th/id/OIP.Xc7bJ9tMtHBx5q95rE-9dwHaEK?rs=1&pid=ImgDetMain',
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Slide changes every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="mt-8"> {/* Add margin-top to prevent overlap with NavBar */}
      <div className="flex items-center justify-center h-[550px] w-full">
        <img
          src={slides[currentSlide]}
          alt="Slider"
          className="w-full md:w-3/4 h-full object-cover rounded-lg transition-opacity duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Slider;
