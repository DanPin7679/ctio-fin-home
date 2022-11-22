import Link from "next/link";
import React from "react";

const sections = [
  { id: 1, title: "Assess", link: "/assess" },
  { id: 2, title: "Learn", link: "/learn" },
  { id: 3, title: "Evaluate", link: "/evaluate" },
  { id: 4, title: "Optimize", link: "/optimize" },
];

const NavSideBar = () => {
  return (
    <nav className="flex flex-col text-xl space-y-5 pl-5 pr-20">
      {sections.map((section) => (
        <Link
          href={section.link}
          key={section.id}
          className="hover:text-blue-300 hover:underline"
        >
          {section.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavSideBar;
