import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Product_Detail = () => {
  const [value, setValue] = useState<string>("1");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Kiểm tra để chỉ cho phép nhập số (hoặc chuỗi rỗng)
    if (newValue === "" || /^[0-9]*$/.test(newValue)) {
      setValue(newValue);
    }
  };
  return (
    <div className="w-[1280px] mx-auto font-poppins ">
      {/* Phần top */}
      <section className=" flex w-full mb-16">
        {/* box ảnh */}
        <div className="flex w-full">
          {/* ảnh bé */}
          <div className="w-1/5">
            <img className="mb-4" src=".././detail.svg" alt="" />
            <img className="mb-4" src=".././detail.svg" alt="" />
            <img className="mb-4" src=".././detail.svg" alt="" />
            <img className="mb-4" src=".././detail.svg" alt="" />
            <img className="mb-4" src=".././detail.svg" alt="" />
          </div>
          {/* ảnh to */}
          <div className="w-4/5">
            <img className="w-[515px] h-auto " src=".././detail.svg" alt="" />
          </div>
        </div>
        {/* box infor */}
        <div className="w-full ml-33px">
          {/* name */}
          <h3 className="text-xl mb-2 font-medium">Asgaard sofa</h3>
          {/* price */}
          <p className="text-40px font-bold text-[#EF4444] mb-2">25.000.000đ</p>
          {/* rating */}
          <div className="flex items-center text-[#9F9F9F ">
            <div className="flex py-5px pr-4 text-[#FFC700] border-[#A3A3A3] border-r-2 ">
              <FaStar className="w-[20px]" />
              <FaStar className="w-[20px]" />
              <FaStar className="w-[20px]" />
              <FaStar className="w-[20px]" />
              <FaStar className="w-[20px]" />
            </div>
            <span className="text-[#9F9F9F] pl-4">5 Customer Review</span>
          </div>
          {/* description */}
          <p className="mt-4 text-base font-medium">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="mt-4 text-[#A3A3A3] ">
            <div className="mb-1">Size</div>
            <ul className="flex space-x-3 ">
              <li className="bg-[#A3A3A3] py-5px px-3 rounded-5px text-[white] bg-[#CA8A04] hover:bg-[#CA8A04] cursor-pointer active:bg-[#CA8A04]">
                L
              </li>
              <li className="bg-[#A3A3A3] py-5px px-3 rounded-5px text-[white] hover:bg-[#CA8A04] cursor-pointer active:bg-[#CA8A04]">
                XL
              </li>
              <li className="bg-[#A3A3A3] py-5px px-3 rounded-5px text-[white] hover:bg-[#CA8A04] cursor-pointer active:bg-[#CA8A04]">
                XS
              </li>
            </ul>
          </div>
          {/* color */}
          <div className="mt-4 text-[#A3A3A3] ">
            <div className="mb-1">Color</div>
            <ul className="flex space-x-4 ">
              <li className="bg-[#816DFA] rounded-full p-4"></li>
              <li className="bg-[#000] rounded-full p-4 "></li>
              <li className="bg-[#B88E2F] rounded-full p-4"></li>
            </ul>
          </div>
          {/* add to cart */}
          <div className="flex space-x-3 mt-8">
            {/* tăng giảm số lượng */}
            <div className="flex items-center border border-[#A3A3A3] px-4 text-base font-medium rounded-5px py-10px">
              <div className="mr-9">
                <button>-</button>
              </div>
              <div className="mr-9">
                <input
                  type="text" // Có thể là "text" hoặc "number"
                  value={value} // Gán giá trị từ state
                  className="w-10 text-center outline-none"
                  onChange={handleChange} // Cập nhật state khi người dùng nhập
                />
              </div>
              <div>
                <button>+</button>
              </div>
            </div>

            {/* button */}
            <Link to="/shop/cart">
              <button className="border text-[#CA8A04] border-[#CA8A04] px-60px text-base font-medium rounded-5px py-10px hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                Add to cart
              </button>
            </Link>
            <button className="border border-[#A3A3A3] px-60px text-base font-medium rounded-5px py-10px">
              + Compare
            </button>
          </div>
          {/* thông tin */}
          <div className="mt-8 border-t border-[#A3A3A3] text-[#a3a3a3] text-base">
            <p className="mt-3 text-base font-medium">SKU : SS001</p>
            <p className="mt-3 text-base font-medium">Category: Sofa</p>
            <p className="mt-3 text-base font-medium">
              Tags: Sofa, Chair, Home, Shop
            </p>
          </div>
        </div>
      </section>
      {/* Phần Middle */}
      <section className="mb-16">
        <div className="flex space-x-16 border-b border-[#A3A3A3] pb-4 mb-8 text-xl font-semibold text-[#A3A3A3]">
          <h3 className="text-[#000]">Description</h3>
          <h3>Additional Information</h3>
          <h3>Reviews [5]</h3>
        </div>
        <div className="text-base font-medium text-[#A3A3A3] mb-8">
          <p className="mb-2">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="flex justify-between space-x-8">
          <img className="w-full" src=".././gallery.svg" alt="" />
          <img className="w-full" src=".././gallery.svg" alt="" />
        </div>
      </section>
      {/* Phần End */}
      {/* Related Products */}
      <section className="font-poppins">
        {/* Top */}
        <div className="max-w-[1280px] h-auto text-center px-1 mb-4 mx-auto">
          <h2 className="text-40px  text-[#262626] font-semibold">
            Related Products
          </h2>
        </div>
        {/* Products */}
        <div className="w-[1280px] flex justify-between mx-auto mb-16">
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/shop/product_detail">
              <div className="overflow-hidden">
                <img
                  className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                  src=".././image 2.svg"
                  alt=""
                />
              </div>
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <Link to="/shop/product_detail">
                <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
              </Link>
              <h5 className="text-base text-[#898989] pb-2">
                Stylish cafe chair
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <Link to="/shop/cart">
                <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/shop/product_detail">
              <div className="overflow-hidden">
                <img
                  className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                  src=".././image 2.svg"
                  alt=""
                />
              </div>
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <Link to="/shop/product_detail">
                <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
              </Link>
              <h5 className="text-base text-[#898989] pb-2">
                Stylish cafe chair
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <Link to="/shop/cart">
                <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/shop/product_detail">
              <div className="overflow-hidden">
                <img
                  className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                  src=".././image 2.svg"
                  alt=""
                />
              </div>
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <Link to="/shop/product_detail">
                <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
              </Link>
              <h5 className="text-base text-[#898989] pb-2">
                Stylish cafe chair
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <Link to="/shop/cart">
                <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/shop/product_detail">
              <div className="overflow-hidden">
                <img
                  className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                  src=".././image 2.svg"
                  alt=""
                />
              </div>
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <Link to="/shop/product_detail">
                <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
              </Link>
              <h5 className="text-base text-[#898989] pb-2">
                Stylish cafe chair
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <Link to="/shop/cart">
                <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product_Detail;
