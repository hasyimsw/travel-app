import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1560103104-4623c14a473b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1520038569969-98da7959fcbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1579340888456-d50f716d20c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1541233055021-849443736842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1624935851312-845758a99160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto py-32 px-4">
      <div className="relative">
        <BsArrowLeftSquareFill
          onClick={prevSlide}
          className="absolute top-[50%] text-3xl text-white cursor-pointer left-5"
        />
        <BsArrowRightSquareFill
          onClick={nextSlide}
          className="absolute top-[50%] text-3xl text-white cursor-pointer right-5"
        />
        {sliderData.map((item, index) => (
          <div key={index} className={index === slide ? "opacity-100" : "opacity-0"}>
            {index === slide && (
              <img
                className="w-full rounded-md shadow-md"
                src={item.url}
                alt="/"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
