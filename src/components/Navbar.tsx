import React from "react";
import Link from "next/link";

const Navbax = () => {
  return (
    <nav className='flex justify-between mt-6 h-[3vh] ml-6'>
      <div className='flex flex-1 items-center gap-8'>Logo</div>
      <div className='flex flex-1 items-center'>
        <div className='flex-1'>
          <ul className='flex gap-16 list-none justify-evenly'>
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
              <Link href='/photography' className='nav-list'>
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
