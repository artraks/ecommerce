import React from "react";
import Img1 from "../../assets/products/lightsaber.png";
import Img2 from "../../assets/products/darthvaderaction.png";
import Img3 from "../../assets/products/deathstar.png";
import Img4 from "../../assets/products/doublelightsaber.png";
import Img5 from "../../assets/products/yodaaction.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Light Saber",
        rating: 5.0,
        color: "Blue",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Darth Vader Action Figure",
        rating: 5.0,
        color: "-",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Death Star Lego Sculpture",
        rating: 5.0,
        color: "-",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Double Ended Light Saber",
        rating: 5.0,
        color: "Red",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Yoda Action Figure",
        rating: 5.0,
        color: "-",
        aosDelay: "800",
    },
]
const Products = () => {
  return (
    <div className="mt-14 mb-22">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm text-primary">Top Selling Products</p>
            <h1 className="text-3xl text-primary font-bold">Products</h1>
            <p className="text-xs text-gray-300">
                May the force be with you
            </p>
        </div>
        {/* Body Section */}
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols- place-items-center gap-5">
                {/* Card Section */}
                {ProductsData.map((data) => (
                    <div key={data.id} className="space-y-3">
                        <img src={data.img} alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                        <div>
                            <h3 className="font-semibold text-white">{data.title}</h3>
                            <div className="flex items-center gap-1">
                                <FaStar className="text-yellow-400" />
                                <span className="text-white">{data.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* View all button*/}
            <div className="flex justify-center">
                <button className="text-center mt-10 cursor-pointer bg-secondary/40 text-white py-1 px-1 rounded-md">
                    View All
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
