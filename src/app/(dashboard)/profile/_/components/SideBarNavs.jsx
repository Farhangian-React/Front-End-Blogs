import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoDocumentText } from "react-icons/io5";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa6";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: <HiMiniRectangleGroup className="w-5 h-5" />,
    href: "/profile",
  },

  {
    id: 2,
    title: "پست ها",
    icon: <IoDocumentText className="w-5 h-5" />,
    href: "/profile/post",
  },
  {
    id: 3,
    title: "نظرات",
    icon: <HiChatBubbleBottomCenterText className="w-5 h-5" />,
    href: "/profile/comments",
  },
  {
    id: 4,
    title: "دسته بندی ها",
    icon: <HiMiniSquares2X2 className="w-5 h-5" />,
    href: "/profile/categories",
  },
  {
    id: 5,
    title: "کاربران",
    icon: <FaUsers className="w-5 h-5" />,
    href: "/profile/users",
  },
];

export default function SideBarNavs() {
  const router = useRouter();
  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                "flex items-center gap-x-3 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-4",
                {
                  "bg-blue-700 font-bold text-red-900":
                    router.pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
