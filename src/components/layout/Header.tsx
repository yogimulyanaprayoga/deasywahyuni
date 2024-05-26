"use client";
import clsx from "clsx";
// import { useRouter } from "next/router";
import * as React from "react";

import Accent from "@/components/Accent";
import UnstyledLink from "@/components/links/UnstyledLink";

type HeaderProps = {
  large?: boolean;
};

export default function Header({ large = false }: HeaderProps) {
  //#region  //*=========== Route Functionality ===========
  //   const router = useRouter();
  /** Ex: /projects/petrolida-2021 -> ['', 'projects', 'petrolida-2021'] */
  //   const arrOfRoute = router.route.split("/");
  //   const baseRoute = "/" + arrOfRoute[1];
  //#endregion  //*======== Route Functionality ===========

  //#region  //*=========== Scroll Shadow ===========
  const [onTop, setOnTop] = React.useState<boolean>(true);
  const [dropdownOpenIndex, setDropdownOpenIndex] = React.useState<
    number | null
  >(null);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //#endregion  //*======== Scroll Shadow ===========

  const toggleDropdown = (index: number) => {
    setDropdownOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const closeDropdown = () => {
    setDropdownOpenIndex(null);
  };

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-shadow",
        !onTop && "shadow-sm"
      )}
    >
      {/* Skip Navigation */}
      <a
        href="#skip-nav"
        className={clsx(
          "rounded-sm p-2 transition",
          "font-medium text-black dark:text-white",
          "bg-white dark:bg-dark",
          "group dark:hover:text-primary-300",
          "focus:outline-none focus:ring focus:ring-primary-300",
          "absolute left-4 top-4",
          "-translate-y-16 focus:translate-y-0"
        )}
      >
        <Accent>Skip to main content</Accent>
      </a>

      {/* Gradient List */}
      <div className="h-2 bg-gradient-to-tr from-primary-200 via-primary-300 to-primary-400" />

      <div className="bg-white transition-colors dark:bg-dark dark:text-white">
        <nav
          className={clsx(
            "layout flex items-center justify-between py-4",
            large && "lg:max-w-[68rem]"
          )}
        >
          <ul className="flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base">
            {links.map((link, index) => (
              <li key={`${link.href}${link.label}`} className="relative">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      onBlur={closeDropdown}
                      className={clsx(
                        "rounded-sm py-2 transition-colors",
                        "font-medium text-black dark:text-white",
                        "group dark:hover:text-primary-300",
                        "focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
                      )}
                    >
                      {link.label}
                    </button>
                    {dropdownOpenIndex === index && (
                      <ul
                        className={clsx(
                          "absolute left-0 mt-2 w-48 bg-white dark:bg-dark rounded-md shadow-lg py-2",
                          "focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
                        )}
                      >
                        {link.submenu.map((sublink) => (
                          <li key={`${sublink.href}${sublink.label}`}>
                            <UnstyledLink
                              href={sublink.href}
                              className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-primary-300 dark:hover:bg-primary-300/20"
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
                    className={clsx(
                      "rounded-sm py-2 transition-colors",
                      "font-medium text-black dark:text-white",
                      "group dark:hover:text-primary-300",
                      "focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
                    )}
                  >
                    {link.label}
                  </UnstyledLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },

  {
    label: "Pembelajaran",
    submenu: [
      { href: "/materi", label: "Materi" },
      { href: "/latihan", label: "Latihan" },
      { href: "/vidio", label: "Video" },
      { href: "/forum", label: "Forum" },
    ],
  },
  { href: "/petunjuk", label: "Petunjuk" },
];
