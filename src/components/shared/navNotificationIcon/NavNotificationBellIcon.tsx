import { useState } from "react";
import { IconBell } from "@tabler/icons-react"; // Importing Tabler's bell icon

const NavNotificationBellIcon = () => {
  const [showNotifications, setShowNotifications] = useState(false); // State to control notification visibility
  const [isHovering, setIsHovering] = useState(false); // State to track hover

  let timer: any;

  // Sample notifications
  const notifications = [
    "New message from John",
    "Your order has shipped",
    "New comment on your post",
    "You have a new follower",
    "New like on your photo",
    "Your profile was viewed",
    "You have a new connection request",
  ];

  // Handle hover on bell icon
  const handleMouseEnter = () => {
    clearTimeout(timer); // Clear any pending hide actions
    setIsHovering(true);
    setShowNotifications(true);
  };

  // Handle hover out from bell icon or modal
  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsHovering(false); // After delay, hide notifications if not hovering
      setShowNotifications(false);
    }, 300); // Notifications stay visible for 300ms after mouse leaves
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Notification Bell Icon */}
      <div className="cursor-pointer p-2 bg-[#e2b760] rounded-full hover:bg-gray-300">
        <IconBell size={24} color="#fff" />
      </div>

      {/* Notification Dropdown */}
      {(showNotifications || isHovering) && (
        <div
          className="absolute z-[50] right-0 mt-4 
        w-72 bg-white shadow-md shadow-gray-200 rounded-2xl z-10 max-h-96 overflow-y-auto hideScroll"
        >
          <ul className="text-sm pl-1">
            {notifications.map(() => (
              <a
                href="/about-us"
                className="gap-1 hover:bg-gray-100 p-3 rounded-xl flex"
              >
                <div className="notification-image flex">
                  <img
                    loading="lazy"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMI5YxZE03Vnj-s-sth2_JxlPd30Zy7yEGg&s"
                    alt=""
                    className=" h-10 w-10"
                  />
                </div>
                <div className="v3-uui-navbar08_item-right">
                  <div className="notification-title">Table Approved</div>
                  <div className="notification-description">
                    Hi Kanika, your table has been approved. You can now share
                    it with your friends for them to join
                  </div>
                </div>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavNotificationBellIcon;
