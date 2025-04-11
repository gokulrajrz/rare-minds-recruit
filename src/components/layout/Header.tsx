
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Header = ({ navbarOpen, setNavbarOpen }: { navbarOpen: boolean, setNavbarOpen: (open: boolean) => void }) => {
  const [pages, setPages] = useState<any[]>([]);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });

  useEffect(() => {
    // Simulate API call - we'll populate with mock data instead of making actual API calls
    const mockPages = [
      { PageType: 1, PageName: "Corporate", PageSlug: "/corporate" },
      { PageType: 1, PageName: "Institutions", PageSlug: "/institutions" },
      { PageType: 1, PageName: "Government", PageSlug: "/government" },
      { PageType: 1, PageName: "Schools", PageSlug: "/schools" },
    ];
    
    setPages(mockPages);

    if (localStorage.getItem("currentUserType") === null) {
      localStorage.setItem("currentUserType", "corporate");
    }
  }, []);

  const redirectToPage = (slug: string) => {
    localStorage.setItem("currentUserType", slug);
    navigate(`/${slug}`);
  };

  return (
    <header className="w-full fixed top-0 left-0 px-2 py-4 sm:py-0 flex z-50 bg-white shadow-md overflow-hidden">
      <div className="text-white align-middle items-center flex-grow z-20 ml-4">
        <a href="/" className="text-2xl font-bold">
          <span className="gradient-text">Rare</span>Minds
        </a>
      </div>
      {!navbarOpen && (
        <select
          className="top-nav-dropdown hidden sm:block mt-3 font-medium"
          onChange={(e) => redirectToPage(e.target.value)}
        >
          {pages.map((ele: any, index) => {
            return (
              <option
                key={index}
                className="px-8"
                value={ele.PageSlug.replace("/", "")}
                selected={
                  ele.PageSlug.replace("/", "") ===
                  localStorage.getItem("currentUserType")
                }
              >
                {" "}
                For {ele.PageName}
              </option>
            );
          })}
        </select>
      )}
      <button
        className="flex top-0 right-0 z-20 relative w-[56px] h-[56px] pl-4 text-black focus:outline-none"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="absolute w-[56px] transform -translate-x-1/2 -translate-y-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-[30.76px] bg-black transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
              navbarOpen
                ? "w-0 opacity-50"
                : "w-[30.76px] delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-[30.76px] bg-black transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
};

export default Header;
