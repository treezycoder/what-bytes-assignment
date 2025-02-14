"use client";
import { BaseComponentProp } from "@/types/components";
import ProfileBox from "../profile-box";
import { profileBoxData } from "@/data/placeholder";
import { useGlobalState } from "@/context";
import CancelIcon from "../../../../public/assets/icons/cancel.icon";
import MenuIcon from "../../../../public/assets/icons/menu.icon";

const Header: React.FC<BaseComponentProp> = () => {
  const { showMobileNav, setShowMobileNav } = useGlobalState();
  return (
    <div className="fixed z-40 left-0 top-0 w-full h-[100px] border-b-2 bg-white flex justify-between items-center px-4">
      {/* logo goes here */}
      <span className="text-xl md:text-2xl lg:text-3xl font-bold font-sans">
        WhatBytes
      </span>
      <ProfileBox
        img_src={profileBoxData.img_src}
        name={profileBoxData.name}
        className="shadow-sm hover:bg-black/5 hidden lg:flex"
      />
      <button
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="lg:hidden p-1 rounded-full hover:bg-black/5 cursor-pointer focus:outline-none"
      >
        {showMobileNav ? <CancelIcon /> : <MenuIcon />}
      </button>
    </div>
  );
};

export default Header;
