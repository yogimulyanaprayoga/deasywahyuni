"use client";
import { useState } from "react";
import clsx from "clsx";
import UnstyledLink from "../links/UnstyledLink";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (label: string) => {
    setDropdownOpen((prev) => (prev === label ? null : label));
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      label: "Pembelajaran",
      submenu: [
        { href: "/blog", label: "Materi" },
        { href: "/matlab", label: "Matlab" },
        { href: "/latihan", label: "Latihan" },
        { href: "/research", label: "Research" },
        { href: "/tanya-jawab", label: "Tanya Jawab" },
        { href: "/umpan-balik", label: "Umpan Balik" },
      ],
    },
    { href: "/petunjuk", label: "Petunjuk" },
  ];

  return (
    <nav className="layout bg-white border-gray-200 dark:bg-gray-900 z-50 fixed top-0 right-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <UnstyledLink
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <h3>Deasy</h3>
        </UnstyledLink>
        <div className="flex md:order-2">
          <button
            type="button"
            aria-controls="navbar-search"
            aria-expanded={menuOpen}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            onClick={toggleMenu}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div
          className={clsx(
            "items-center justify-between w-full md:flex md:w-auto md:order-1",
            {
              hidden: !menuOpen,
              block: menuOpen,
            }
          )}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col z-50 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link) => (
              <li key={link.label} className="relative">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="block w-full text-left py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {link.label}
                    </button>
                    {dropdownOpen === link.label && (
                      <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.label}>
                            <UnstyledLink
                              href={sublink.href}
                              className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                              {sublink.label}
                            </UnstyledLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <UnstyledLink
                    href={link.href}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {link.label}
                  </UnstyledLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
