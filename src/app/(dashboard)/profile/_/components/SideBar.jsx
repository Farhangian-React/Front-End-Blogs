"use client";

import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { IoMdHome } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { useAuth } from "@/context/AuthContext";

function SideBar({onClose}) {
  const { logout } = useAuth();

  const logoutHandler = async () => {
    console.log("خروج");
    await logout();
  };

  return (
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">
      {/* Drawer header */}
      <Link
        href="/"
        className="flex items-center gap-x-4 justify-center text-secondary-700 border-b  border-b-secondary-200 
        pb-2 mb-6"
      >
        <IoMdHome className="w-6 h-6" />
        <span> نکست بلاگ</span>
      </Link>
      {/* Drawer content */}
      <ButtonIcon
      onClick={onClose}
      variant="outline"
      className="block lg:hidden border-none"
      >
<HiOutlineXMark/>
      </ButtonIcon>
      <div className="overflow-y-auto flex-auto">
        <SideBarNavs />
        <button
          onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-primary-400 cursor-pointer"
        >
          <HiMiniArrowLeftStartOnRectangle className="ml-4 h-5 w-5" />
          <span>خروج</span>
        </button>
      </div>
    </div>
  );
}
export default SideBar;
