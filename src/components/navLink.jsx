"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      className={` p-1 ${
        pathName === link.url && "text-teal-400 border-teal-400 border-b-2"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
