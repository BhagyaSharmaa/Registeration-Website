const Contact = () => {
    return (
      <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
          <h1 className="text-3xl font-bold text-[#4a773c] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            Have any questions or concerns? Feel free to get in touch with us!
          </p>
          <div className="text-left">
            <p className="text-gray-700 font-semibold">Email:</p>
            <p className="text-gray-600 mb-4">support@ayurvedastartup.com</p>
            
            <p className="text-gray-700 font-semibold">Phone:</p>
            <p className="text-gray-600 mb-4">+123 456 7890</p>
            
            <p className="text-gray-700 font-semibold">Address:</p>
            <p className="text-gray-600">123 Ayurveda Lane, Green City</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  