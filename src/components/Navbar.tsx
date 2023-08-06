import React from "react";
import Link from "next/link";

const Navbax = () => {
  return (
    <nav className='flex mt-6 h-[3vh] ml-6 relative justify-around'>
      <div className='flex lg:flex-1 items-center'>Logo</div>
      <div className='flex flex-1 items-center'>
        <div className='flex-1'>
          <ul className='flex list-none justify-evenly'>
            <li>
              <Link href='/' className='nav-list'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='nav-list'>
                About
              </Link>
            </li>
            <li>
              <Link href='/album' className='nav-list'>
                Album
              </Link>
            </li>
            <li>
              <Link href='/contact' className='nav-list'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbax;
