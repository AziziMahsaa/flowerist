"use client";
import Navitem from "./navitem";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div className="navbar container mx-auto justify-between items-center ">
      <div className="navbar-start text-green-800 ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href="/" className=" flex text-center  normal-case ">
          <Image
            className="h-12 w-20"
            src="/img/logo.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div>
        <div className="navbar-center hidden lg:flex text-white ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Navitem title="Home" link="/" />
            </li>
            <li>
              <Navitem title="About Us" link="/about" />
            </li>
            <li>
              <Navitem title="Planters" link="/planters" />
            </li>
            <li>
              <Navitem title="Contact" link="/contact" />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="border hover hover:border-2   rounded-sm  border-white w-[150px] h-[41px] text-white  ">
            Call Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
