import React from "react";
import { Link } from "react-router-dom";
import Support from "../../../components/Support";
import Banner from "../../../components/Banner";

const ShopPage = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Main */}
      <div className="flex w-4/5 mx-auto *:font-poppins">
        {/* aside */}
        <aside className="w-1/4">
          <h3 className="text-xl font-semibold text-[#262626] mb-4">
            Categories
          </h3>
          <ul className="font-medium">
            <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] hover:text-[#CA8A04] cursor-pointer">
              <Link to="">Cafe Chair</Link>
            </li>
            <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] hover:text-[#CA8A04] cursor-pointer">
              <Link to="">Sofa</Link>
            </li>
            <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] hover:text-[#CA8A04] cursor-pointer">
              <Link to="">Lamp</Link>
            </li>
            <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] hover:text-[#CA8A04] cursor-pointer">
              <Link to="">Carpet</Link>
            </li>
            <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] cursor-pointer">
              <Link to="">Cabinet</Link>
            </li>
            <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] cursor-pointer">
              <Link to="">Tea table</Link>
            </li>
          </ul>
        </aside>
        <section className="w-3/4 mt-7">
          <div className=" flex flex-wrap justify-between">
            <div className="h-full mb-8">
              {/* image */}
              <Link to="product_detail">
                <div className="overflow-hidden">
                  <img
                    className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src="./image 2.svg"
                    alt="product"
                  />
                </div>
              </Link>
              {/* product-info */}
              <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
                <Link to="product_detail">
                  <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
                </Link>
                <h5 className="text-base text-[#898989] pb-2">
                  Stylish cafe chair
                </h5>
                <p className="text-[#EF4444] font-semibold text-xl pb-3">
                  2.500.000đ
                </p>
                <Link to="cart">
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-white">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-full mb-8">
              {/* image */}
              <Link to="product_detail">
                <div className="overflow-hidden">
                  <img
                    className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src="./image 2.svg"
                    alt="product"
                  />
                </div>
              </Link>
              {/* product-info */}
              <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
                <Link to="product_detail">
                  <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
                </Link>
                <h5 className="text-base text-[#898989] pb-2">
                  Stylish cafe chair
                </h5>
                <p className="text-[#EF4444] font-semibold text-xl pb-3">
                  2.500.000đ
                </p>
                <Link to="cart">
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-white">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-full mb-8">
              {/* image */}
              <Link to="product_detail">
                <div className="overflow-hidden">
                  <img
                    className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src="./image 2.svg"
                    alt="product"
                  />
                </div>
              </Link>
              {/* product-info */}
              <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
                <Link to="product_detail">
                  <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
                </Link>
                <h5 className="text-base text-[#898989] pb-2">
                  Stylish cafe chair
                </h5>
                <p className="text-[#EF4444] font-semibold text-xl pb-3">
                  2.500.000đ
                </p>
                <Link to="cart">
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-white">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-full mb-8">
              {/* image */}
              <Link to="product_detail">
                <div className="overflow-hidden">
                  <img
                    className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src="./image 2.svg"
                    alt="product"
                  />
                </div>
              </Link>
              {/* product-info */}
              <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
                <Link to="product_detail">
                  <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
                </Link>
                <h5 className="text-base text-[#898989] pb-2">
                  Stylish cafe chair
                </h5>
                <p className="text-[#EF4444] font-semibold text-xl pb-3">
                  2.500.000đ
                </p>
                <Link to="cart">
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-white">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-full mb-8">
              {/* image */}
              <Link to="product_detail">
                <div className="overflow-hidden">
                  <img
                    className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src="./image 2.svg"
                    alt="product"
                  />
                </div>
              </Link>
              {/* product-info */}
              <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
                <Link to="product_detail">
                  <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
                </Link>
                <h5 className="text-base text-[#898989] pb-2">
                  Stylish cafe chair
                </h5>
                <p className="text-[#EF4444] font-semibold text-xl pb-3">
                  2.500.000đ
                </p>
                <Link to="cart">
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-white">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-full mb-8">
              {/* image */}
              <Link to="product_detail">
                <div className="overflow-hidden">
                  <img
                    className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src="./image 2.svg"
                    alt="product"
                  />
                </div>
              </Link>
              {/* product-info */}
              <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
                <Link to="product_detail">
                  <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
                </Link>
                <h5 className="text-base text-[#898989] pb-2">
                  Stylish cafe chair
                </h5>
                <p className="text-[#EF4444] font-semibold text-xl pb-3">
                  2.500.000đ
                </p>
                <Link to="cart">
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-white">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-full mb-8">
              {/* image */}
              <Link to="product_detail">
                <div className="overflow-hidden">
                  <img
                    className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src="./image 2.svg"
                    alt="product"
                  />
                </div>
              </Link>
              {/* product-info */}
              <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
                <Link to="product_detail">
                  <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
                </Link>
                <h5 className="text-base text-[#898989] pb-2">
                  Stylish cafe chair
                </h5>
                <p className="text-[#EF4444] font-semibold text-xl pb-3">
                  2.500.000đ
                </p>
                <Link to="cart">
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-white">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-full mb-8">
              {/* image */}
              <Link to="product_detail">
                <div className="overflow-hidden">
                  <img
                    className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src="./image 2.svg"
                    alt="product"
                  />
                </div>
              </Link>
              {/* product-info */}
              <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
                <Link to="product_detail">
                  <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
                </Link>
                <h5 className="text-base text-[#898989] pb-2">
                  Stylish cafe chair
                </h5>
                <p className="text-[#EF4444] font-semibold text-xl pb-3">
                  2.500.000đ
                </p>
                <Link to="cart">
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-white">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-full mb-8">
              {/* image */}
              <Link to="product_detail">
                <div className="overflow-hidden">
                  <img
                    className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src="./image 2.svg"
                    alt="product"
                  />
                </div>
              </Link>
              {/* product-info */}
              <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
                <Link to="product_detail">
                  <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
                </Link>
                <h5 className="text-base text-[#898989] pb-2">
                  Stylish cafe chair
                </h5>
                <p className="text-[#EF4444] font-semibold text-xl pb-3">
                  2.500.000đ
                </p>
                <Link to="cart">
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-white">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-start font-medium">
            <div className="py-4 bg-[#A3A3A3] px-7 rounded-10px bg-[#CA8A04] active:bg-[#CA8A04] text-white cursor-pointer hover:bg-[#CA8A04] text-xl">
              1
            </div>{" "}
            <div className="py-4 bg-[#A3A3A3] px-7 rounded-10px active:bg-[#CA8A04] text-white cursor-pointer hover:bg-[#CA8A04] text-xl ml-4">
              2
            </div>{" "}
            <div className="py-4 bg-[#A3A3A3] px-7 rounded-10px active:bg-[#CA8A04] text-white cursor-pointer hover:bg-[#CA8A04] text-xl ml-4">
              3
            </div>{" "}
            <div className="py-4 bg-[#A3A3A3] px-7 rounded-10px active:bg-[#CA8A04] text-white cursor-pointer hover:bg-[#CA8A04] text-xl ml-4">
              Next
            </div>
          </div>
        </section>
      </div>
      {/* Support */}
      <Support />
    </>
  );
};

export default ShopPage;
