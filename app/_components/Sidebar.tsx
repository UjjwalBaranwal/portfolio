"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { RiContactsBook3Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
const navLinks = [
  {
    name: "About YourSelf",
    href: "/account",
    icon: <FaRegUser className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Project",
    href: "/account/projects",
    icon: <GoProjectRoadmap className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Add Project",
    href: "/account/addProject",
    icon: <PiProjectorScreenChartLight className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Contact Us",
    href: "/account/contactus",
    icon: <RiContactsBook3Line className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname(); // enable only in client component
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                link.href === pathname ? "bg-primary-900" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <CiLogout />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
