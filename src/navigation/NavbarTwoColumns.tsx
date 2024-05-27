import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar flex flex-wrap items-center justify-between">
        <div>
          <Link href="/">{props.logo}</Link>
        </div>

        <button
          className="hamburger-icon"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className={`icon ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-menu flex items-center text-sm font-medium text-gray-800">
            {props.children}
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #ffffff;
          z-index: 1000;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .navbar {
          padding: 1rem 10rem; /* Adjust x-padding here */
        }

        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }

        .hamburger-icon {
          display: none;
          position: relative;
          width: 30px;
          height: 20px;
          cursor: pointer;
          z-index: 1010;
        }

        .hamburger-icon .icon {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hamburger-icon .icon span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: black;
          border-radius: 9px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }

        .hamburger-icon .icon span:nth-child(1) {
          top: 0px;
        }

        .hamburger-icon .icon span:nth-child(2) {
          top: 8px;
        }

        .hamburger-icon .icon span:nth-child(3) {
          top: 16px;
        }

        .hamburger-icon .icon.open span:nth-child(1) {
          top: 8px;
          transform: rotate(135deg);
        }

        .hamburger-icon .icon.open span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        .hamburger-icon .icon.open span:nth-child(3) {
          top: 8px;
          transform: rotate(-135deg);
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1rem;
          }

          .hamburger-icon {
            display: block;
          }

          .menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #ffffff;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            z-index: 999;
            transition: max-height 0.3s ease-in-out;
            overflow: hidden;
            max-height: 0;
          }

          .menu.open {
            display: block;
            max-height: 500px; /* Adjust according to your menu items */
          }

          .menu ul {
            flex-direction: column;
            align-items: flex-start; /* Align items to the left */
            padding-left: 1rem; /* Optional: Add padding for better alignment */
          }

          .menu ul :global(li) {
            margin: 12px 0; /* Adjust margin between items */
          }
        }
      `}</style>
    </div>
  );
};

export { NavbarTwoColumns };
