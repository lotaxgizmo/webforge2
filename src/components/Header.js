import React, { useState } from 'react';
// import logo2 from "../assets/logo2.svg";
import logo1 from "../assets/logo1.png";
import botline from "../assets/botline.svg";
import contact2 from "../assets/contact2.svg";

const MENU_ITEMS = [
  { name: "Home", link: "#" },
  { name: "About", link: "#About" },
  { name: "Clients", link: "#Clients" },
  { name: "Twitter", link: "https://x.com/bogdan_deliu?s=21&t=UpWUFwTcyTD5t8btc2s3NA" },
  { name: "Telegram", link: "https://t.me/benlightened3" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='flex flex-row text-white lg:px-16 px-4 py-6 justify-between items-center'>
        <div className="flex flex-row justify-between items-center">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={logo1} alt="Logo" className='w-48 px-4 mr-4' />
          </a>
          <div className="hidden lg:flex flex-row">
            {MENU_ITEMS.map((item) => (
              <a href={item.link} className='text-2xl lg:mr-5' key={item.name}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <a href="https://t.me/benlightened3" target="_blank" rel="noopener noreferrer">
            <img src={contact2} alt="Contact" className='w-52 px-5 hidden lg:block' />
          </a>
          <button className="lg:hidden focus:outline-none ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center px-4 pb-4 transition-all duration-300 ease-in-out bg-black/20 w-full">
          {MENU_ITEMS.map((item) => (
            <a href={item.link} className='text-4xl py-2 border-b-[1px] text-white w-full text-center' key={item.name}>
              {item.name}
            </a>
          ))}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={contact2} alt="Contact" className='w-72 px- py-2' />
          </a>
        </div>
      )}
      <img src={botline} alt="Bottom Line" />
    </>
  );
}

export default Header;
