import { useState } from "react";
import { IconUser } from "@tabler/icons-react"; // Importing Tabler's user icon

const NavProfileIcon = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [isHovering, setIsHovering] = useState(false); // State to track hover

  let timer: any;

  // Handle hover on profile icon
  const handleMouseEnter = () => {
    clearTimeout(timer); // Clear any pending hide actions
    setIsHovering(true);
    setShowModal(true);
  };

  // Handle hover out from profile icon or modal
  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsHovering(false); // After delay, hide modal if not hovering
      setShowModal(false);
    }, 300); // Modal stays visible for 300ms after mouse leaves
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Profile Icon */}
      <div className="cursor-pointer p-2 bg-[#e2b760] rounded-full hover:bg-gray-300">
        <IconUser size={24} color="#fff" />
      </div>

      {/* Modal */}
      {(showModal || isHovering) && (
        <div className="absolute z-[50] right-0 mt-2 w-48 bg-white flex flex-col justify-center items-center shadow-md shadow-gray-200 rounded-2xl z-10">
          <div className="text-sm pb-5 flex flex-col px-5 text-md  w-full justify-center items-center">
            <div className="hover:bg-gray-100 w-full rounded-xl text-center py-2 cursor-pointer">
              Profile
            </div>
            <div className="hover:bg-gray-100 rounded-xl w-full text-center py-2 cursor-pointer">
              My Bookings
            </div>
            <div className="hover:bg-red-100 mb- rounded-xl w-full text-center py-2 cursor-pointer text-red-600">
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavProfileIcon;
