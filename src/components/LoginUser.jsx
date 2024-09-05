import { useState } from 'react';

const LoginUser = () => {
  const [formData, setFormData] = useState({
    ayushId: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data submitted:', formData);
  };

  return (
    <div 
      className="min-h-screen bg-[#2d4734] text-[#3b3b3b] relative"
      style={{ 
        backgroundImage: `url('https://clipartcraft.com/images/nature-clipart-corner-border-10.png')`, // Replace with your transparent background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div> {/* Green overlay for contrast */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-[#3b3b3b]">
        <div className="bg-white/85 border border-[#dddddd] rounded-lg p-8 shadow-lg w-full max-w-sm text-[#2d2d2d]">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="ayushId" className="block mb-1">Ayush ID:</label>
              <input
                type="text"
                id="ayushId"
                name="ayushId"
                value={formData.ayushId}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[#dddddd] rounded-md mb-4 text-[#2d2d2d]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block mb-1">Date of Birth (DD/MM/YYYY):</label>
              <input
                type="text"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
                required
                className="w-full p-2 border border-[#dddddd] rounded-md mb-4 text-[#2d2d2d]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#4a773c] text-white rounded-md py-2 px-4 hover:bg-[#2d4734] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
