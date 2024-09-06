import { useState } from 'react';
import axios from 'axios';
import { handleSuccess,handleError } from '../utils';
import { ToastContainer } from 'react-toastify';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessRegistration: null,
    businessAddressProof: null,
  });

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;

    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('businessRegistration', formData.businessRegistration); // Use the correct field name
    data.append('businessAddressProof', formData.businessAddressProof); // Use the correct field name

    try {
      const URL = 'http://localhost:8080/register';
      const response = await axios.post(URL, data);
      const {message , success , ayushID} = response.data;
      if(success){
        handleSuccess(`your AYUSH_ID is : ${ayushID}`);
      } else {
        handleError("failed to register");
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    console.log('Form data submitted:', formData);
  };

  return (
    <div
      className="min-h-screen bg-[#2d4734] text-[#3b3b3b] relative"
      style={{
        backgroundImage: `url('https://clipartcraft.com/images/nature-clipart-corner-border-10.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-[#3b3b3b]">
        <div className="bg-white/85 border border-[#dddddd] rounded-lg p-8 shadow-lg w-full max-w-lg text-[#2d2d2d]">
          <h2 className="text-2xl font-semibold mb-6">Medicine Startup Registration</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Form Fields */}
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                className="w-full p-2 border border-[#dddddd] rounded-md mb-4 text-[#2d2d2d]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="w-full p-2 border border-[#dddddd] rounded-md mb-4 text-[#2d2d2d]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="businessRegistration" className="block mb-1">Business Registration:</label>
              <input
                type="file"
                id="businessRegistration"
                name="businessRegistration"
                onChange={handleChange}
                className="w-full p-2 border border-[#dddddd] rounded-md mb-2 text-[#2d2d2d]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="businessAddressProof" className="block mb-1">Business Address Proof:</label>
              <input
                type="file"
                id="businessAddressProof"
                name="businessAddressProof"
                onChange={handleChange}
                className="w-full p-2 border border-[#dddddd] rounded-md mb-2 text-[#2d2d2d]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#4a773c] text-white rounded-md py-2 px-4 hover:bg-[#2d4734] transition-colors"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default RegistrationForm;
