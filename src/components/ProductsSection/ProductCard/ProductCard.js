import React from "react";

// review card component
const ProductCard = ({ description, productName, image }) => {
  return (
    <div className="flex flex-col relative bg-white shadow-shadow4 rounded-xl px-4 py-5 ml-2 lg:ml-4">
      {/* product image */}
      <img src={image} alt="marks" className="" />

      <div className="px-10 py-5">
        {/* product name */}
        <span className="text-gray1 text-normal font-normal font-montserrat">
          Product Name: {productName}
        </span>

        {/* product description */}
        <p className="text-blue-8 text-sm font-normal font-montserrat mb-14 mt-5">
          {description}
        </p>

        {/* know more text */}
        <span className="absolute bottom-4 right-4 text-blue7 font-inter font-medium text-xs md:text-base cursor-pointer hover:text-blue5">
          know more
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
