import React from "react"
import Logo from "../../assets/logo.png"
/*import { RiSearchLine } from "react-icons/ri";*/
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { MdAdminPanelSettings } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Clothes",
        link: "/#",
    },
    {
        id: 4,
        name: "Light Sabers",
        link: "/#",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    },
]
const Navbar = () => {
    const navigate = useNavigate();
  
    const handleNavigation = (route) => {
      navigate(route);
    };
  return (
    <div className="shadow-md bg-black">
      {/* upper Navbar */}
      <div className="py-2">
        <div className="container flex justify-between items-center">
            <div>
                <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                    <img src={Logo} alt="Logo"
                    className="w-10 uppercase" />
                    <span className="text-white">StoreTrooper</span>
                </a>
            </div>
            {/* search bar*/}
            <div className="flex justify-between items-center gap-4">
                <div className="relative group hidden sm:block">
                    <input type="text" 
                    placeholder="search"
                    className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
                    rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
                    focus:border-primary"
                    />
                    <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                </div>
            </div>
            {/* order button */}
            <button
            onClick={() => alert("Ordering not available yet")}
            className="bg-yellow-500 py-1 px-4 rounded-full flex items-center gap-3 group text-white"
            >
                <span className="group-hover:block hidden transition-all duration-200">Order</span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
            </button>
            {/* Admin button */}
            <button onClick={() => handleNavigation('/admin')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <MdAdminPanelSettings className="mr-2" />
            Admin
          </button>
        </div>
      </div>
        {/* lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center text-white gap-4">
            {
                Menu.map((data)=> (
                    <li key={data.id}>
                        <a href={data.link} className="inline-block px-4 hover:text-yellow-400 duration-200">
                            {data.name}
                        </a>
                    </li>
                ))
            }
            {/* Simple Dropdown and links*/}
            <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center  gap-[2px] py-2 inline-block px-4 hover:text-yellow-400 duration-200">
                    Dropdown
                    <span>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-black p-2 text-white shadow-md">
                    <ul>
                        {DropdownLinks.map((data) => (
                            <li key={data.id}>
                                <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                                    {data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar