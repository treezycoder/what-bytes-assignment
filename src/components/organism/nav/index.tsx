"use client";

import { profileBoxData } from "@/data/placeholder";
import ProfileBox from "../../molecules/profile-box";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import DashboardIcon from "../../../../public/assets/icons/dashboard.icon";
import SkillTestIcon from "../../../../public/assets/icons/skill-test.icon";
import InternshipIcon from "../../../../public/assets/icons/internship.icon";
import styles from "./nav.module.css";
import { useGlobalState } from "@/context";

type NavOptions = "Dashboard" | "Skill Test" | "Internship";
interface NavOptionsData {
  title: NavOptions;
  icon: ReactNode;
}
const navOptions: NavOptionsData[] = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Skill Test",
    icon: <SkillTestIcon />,
  },

  {
    title: "Internship",
    icon: <InternshipIcon />,
  },
];

const Nav: React.FC = () => {
  const pathName = usePathname();
  const { setShowMobileNav } = useGlobalState();

  //function to get the routes for each nav option
  function getRoute(option: NavOptions): string {
    if (option === "Dashboard") {
      return "/dashboard";
    }

    if (option === "Skill Test") {
      return "/skill-test";
    }

    if (option === "Internship") {
      return "/internship";
    }

    return "/";
  }

  return (
    <nav
      className={`flex w-[200px] flex-col gap-4 bg-white  transition duration-500`}
    >
      <span className="">
        <ProfileBox
          img_src={profileBoxData.img_src}
          name={profileBoxData.name}
          className="border-none shadow-none pl-4 lg:hidden"
        />
      </span>
      <ul className="flex flex-col items-start gap-1 w-full">
        {navOptions.map((option, index) => (
          <Link
            key={`${index}`}
            href={getRoute(option.title)}
            className="w-full"
          >
            <li
              onClick={() => setShowMobileNav(false)}
              key={index}
              className={`flex w-full items-center cursor-pointer gap-4 pl-4 py-4 transition-all duration-300 rounded-r-[56px] group hover:bg-black/5 ${
                getRoute(option.title) === pathName
                  ? "bg-black/5"
                  : "bg-transparent"
              }`}
            >
              <span
                className={`${styles.icon} ${
                  getRoute(option.title) === pathName
                    ? `text-blue-600 ${styles.active}`
                    : `text-gray-500`
                }`}
              >
                {option.icon}
              </span>
              <span
                className={`font-bold font-sans text-sm ${
                  getRoute(option.title) === pathName
                    ? "text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {option.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
