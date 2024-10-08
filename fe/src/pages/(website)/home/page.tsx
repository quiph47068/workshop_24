import React from "react";

const HomePage = () => {
    return (
        <div>
            <img src="https://picsum.photos/id/1/1440/600" alt="" className="w-full" />
            <p className="font-sans text-[30px] font-bold ml-[4vw] mb-[20px]">New Products</p>
            <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col items-center border border-gray-300 bg-gray-100 p-4 rounded space-y-4">
            <img src="/" alt="image1.svg" />
            <p className="font-sans text-[15px] font-bold">Sytherine</p>
            <p>2.500.000đ</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to cart
            </button>
            </div>

            

           
            </div>
        </div>
        
    );
};

export default HomePage;
