import React from "react";
import Link from "next/link";

const modules = [
  { id: 1, title: "Assess", link: "/assess" },
  { id: 2, title: "Learn", link: "/learn" },
  { id: 3, title: "Evaluate", link: "/evaluate/" },
  { id: 4, title: "Optimize", link: "/optimize" },
];

const NavTopBar = () => {
  return (
    <nav className="relative container mx-auto py-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="text-4xl text-orange-400">CTio</div>
        </Link>
        <div className="flex items-center justify-between space-x-5 text-xl">
          {modules.map((module) => (
            <Link
              href={module.link}
              key={module.id}
              className="hover:text-blue-300 hover:underline"
            >
              {module.title}
            </Link>
          ))}
        </div>
        <div className="space-x-3">
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign-up</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavTopBar;
