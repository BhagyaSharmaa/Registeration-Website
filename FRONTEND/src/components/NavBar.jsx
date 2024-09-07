import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-24 p-6 flex justify-between items-center bg-[#55a63a] sticky top-0 left-0 z-10"> {/* Changed from fixed to sticky */}
      <div>Logo</div>
      <div className="flex gap-3">
        <button className="bg-[#4a773c] text-white rounded-md px-4 py-2 text-lg font-semibold transition-colors hover:bg-[#2d4734]" onClick={()=>navigate('/registration-form')}>Startup Registration</button>
        <button className="bg-[#4a773c] text-white rounded-md px-4 py-2 text-lg font-semibold transition-colors hover:bg-[#2d4734]" onClick={()=>navigate('/login-user')}>Login</button>
        <button className="bg-[#4a773c] text-white rounded-md px-4 py-2 text-lg font-semibold transition-colors hover:bg-[#2d4734]" onClick={()=>navigate('/about')}>About</button>
        <button className="bg-[#4a773c] text-white rounded-md px-4 py-2 text-lg font-semibold transition-colors hover:bg-[#2d4734]" onClick={()=>navigate('/contact')}>Contact Us</button>
      </div>
    </nav>
  );
};

export default NavBar;
