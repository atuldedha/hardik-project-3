import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import reviewData from "./staticData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./productsSection.css";

const ProductsSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 900 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="sectionContainer">
      <h1 className="heading">Products</h1>

      {/* product cards */}
      {/* dummy data */}
      <div className="w-full h-full">
        <Carousel
          showDots={true}
          swipeable={true}
          responsive={responsive}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {reviewData?.map((data) => (
            <ProductCard
              key={data.id}
              description={data.smallDesc}
              productName={data.productName}
              image={data.image}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductsSection;
