import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import SvgTabIndicator from "../../shared/svgTabIndicator/SvgTabIndicator";
import ConcertCardList from "../concertCardList/ConcertCardList";

const SlidingTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" }); // Initialize AOS
  }, []);

  const tabs = [
    { label: "Open to All", Component: ConcertCardList },
    { label: "Travel", icon: "✈️", Component: ConcertCardList },
    {
      label: "Relationships",
      icon: "❤️",
      Component: () => <div>Relationships Content</div>,
    },
    { label: "Taboo", icon: "🛑", Component: () => <div>Taboo Content</div> },
    {
      label: "F&B",
      icon: "🍴",
      Component: () => <div>Food & Beverages Content</div>,
    },
    {
      label: "Books/Movies",
      icon: "🎥",
      Component: () => <div>Books/Movies Content</div>,
    },
    {
      label: "In the shoes of",
      icon: "👟",
      Component: () => <div>In the Shoes of Content</div>,
    },
    { label: "Others", icon: "🤔", Component: () => <div>Other Content</div> },
  ];

  const ActiveComponent = tabs[activeTab].Component;

  const handleTabChange = (index: any) => {
    if (index !== activeTab) {
      setActiveTab(index);
    }
  };

  return (
    <div>
      {/* Tabs Header */}
      <div className="sticky top-0 bg-white z-10 shadow-md shadow-gray-200 pb-3">
        <div className="relative max-w-3xl mx-auto flex gap-2 w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex text-center flex-col w-32 items-center justify-center py-3 cursor-pointer ${
                activeTab === index
                  ? "text-gray-800 font-semibold"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabChange(index)}
            >
              <div
                className=""
                style={{
                  filter: activeTab === index ? "none" : "grayscale(10%)",
                  opacity: activeTab === index ? 1 : 0.5,
                  transition: "opacity 0.8s, filter 0.8s",
                }}
              >
                <SvgTabIndicator name={tab.label} />
              </div>
              <span className="mt-1 text-xs text-center">{tab.label}</span>
            </div>
          ))}
          {/* Sliding Underline */}
          <div
            className="absolute bottom-0 h-[2.5px] bg-[#e2b760] transition-transform duration-300"
            style={{
              width: `${100 / tabs.length}%`,
              transform: `translateX(${activeTab * 100}%)`,
            }}
          />
        </div>
      </div>

      {/* Tab Content */}
      <div
        key={activeTab} // Ensure AOS re-applies for each new tab
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="py-8 text-center"
      >
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default SlidingTabs;
