import React from 'react'
import footerLogo from "../../assets/logo.png"
import Banner from "../../assets/website/images.png"
import {
    FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt
} from "react-icons/fa"

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]
const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
            {/* Company details*/}
            <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                    <img src={footerLogo} alt="" className="max-w-[50px]" />
                    StoreTrooper
                </h1>
                <p>
                    Awaken the force within you with the best Star Wars products
                </p>
            </div>
            {/* Footer Links*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                            Important Links
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {
                                FooterLinks.map((link) => <li className="cursor-pointer hover:text-secondary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                                    <span>{link.title}</span>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
                {/*Social Links*/}
                <div>
                    <div className="flex items-center gap-4 mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl" />
                        </a>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Uberlândia, Minas Gerais</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
