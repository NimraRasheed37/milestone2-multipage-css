'use client';

import Link from "next/link";
import { useState } from "react";
import { FaHome, FaList, FaBars, FaRocket } from "react-icons/fa"; 
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname(); 

  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Recipes", path: "/recipes", icon: <FaList /> },
    { name: "Sign Up", path: "/signup", icon: <FaRocket /> }
  ];

  function toggleSidebar() {
    setShowSidebar(!showSidebar); 
  }

  function closeSidebar() {
    setShowSidebar(false); 
  }

  return (
    <>
      <div className="navbar ">
        <Link href="/" className="logo">
          F<span>oo</span>dily Ever After
        </Link>
        <div className={`nav-links ${showSidebar ? "hide" : "show"}`}>
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div onClick={toggleSidebar} className={`sidebar-btn ${showSidebar ? "active" : ""}`}>
          <FaBars size={30} color="var(--text-color)" />
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${showSidebar ? "open" : ""}`}>
        
        <div className="sidebar-close">
          {/* Add onClick handler to close the sidebar when "x" is clicked */}
          <button onClick={closeSidebar}>x</button>
        </div>
        
        <div className="sidebar-links">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={pathname === link.path ? "sidebar-link active" : "sidebar-link"}
              onClick={closeSidebar} 
            >
              <div className="sidebar-icon">{link.icon}</div>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
