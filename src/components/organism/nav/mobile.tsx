"use client";

import { useGlobalState } from "@/context";
import Nav from "./index";

const MobileNav: React.FC = () => {
  const { showMobileNav, setShowMobileNav } = useGlobalState();

  // Prevent click events from propagating to the overlay
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      style={{
        width: showMobileNav ? "100%" : "0",
        opacity: showMobileNav ? "1" : "0",
      }}
      onClick={() => setShowMobileNav(false)}
      className={`${"inset-0 top-[100px] z-10 left-0 flex items-start bg-black/10 lg:hidden fixed h-screen"}`}
    >
      <aside
        onClick={handleContentClick}
        className={`${
          showMobileNav ? "block" : "hidden"
        } fixed overflow-hidden pr-1  border-r-2 flex flex-col justify-start gap-4 pt-4  bg-white h-full`}
      >
        <Nav />
      </aside>
    </div>
  );
};

export default MobileNav;
