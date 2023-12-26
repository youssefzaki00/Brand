import React, { useEffect, useState } from "react";
import "./OfferSection.css";
import { useProducts } from "../../../Context/ProductsContext";
import { useNavigate } from "react-router";

function OfferSection() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const products = useProducts();

  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-06-1"); // Replace this with your target date and time
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    if (difference > 0) {
      const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutesLeft = Math.floor((difference / 1000 / 60) % 60);
      const secondsLeft = Math.floor((difference / 1000) % 60);

      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    }
  };
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handelChosenProduct = (id, name, category) => {
    navigate(`/AllCategory/${category}/${name}/${id}`);
    scrollToTop();
  };
  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="offerSection container mx-auto xl:px-14 rounded-lg">
      <div className="rounded-lg bg-white dark:bg-zinc-800 lg:grid  lg:grid-cols-7 px-2 ">
        <div className="offer flex lg:block flex-col justify-between items-center lg:items-center mb-4 lg:mb-0 w-full lg:col-span-2 px-3 pt-2">
          <div className=" flex flex-col">
            <h3 className="text-lg lg:text-2xl font-bold">Deals and offers</h3>
            <p className=" text-zinc-400">Hygiene equipments</p>
          </div>
          <div className="counter mt-6 flex w-3/6 lg:w-5/6 gap-2 lg:gap-4 mr-4 lg:mr-0 mb-4 justify-center">
            <div className="unit text-white bg-neutral-600 py-1 md:py-2 rounded flex flex-col justify-center items-center w-12 md:w-16 px-1.5">
              <span className="days font-bold text-lg lg:text-xl">{days}</span>
              <span className=" font-medium  lg:font-extralight">Days</span>
            </div>
            <div className="unit text-white bg-neutral-600 py-1 md:py-2 rounded flex flex-col justify-center items-center w-12 md:w-16 px-1.5">
              <span className="hours font-bold text-lg lg:text-xl">
                {hours}
              </span>
              <span className=" font-medium lg:font-extralight">Hour</span>
            </div>
            <div className="unit text-white bg-neutral-600 py-1 md:py-2 rounded flex flex-col justify-center items-center w-12 md:w-16 px-1.5">
              <span className="hours font-bold text-lg lg:text-xl">
                {minutes}
              </span>
              <span className=" font-medium lg:font-extralight">Min</span>
            </div>
            <div className="unit text-white bg-neutral-600 py-1 md:py-2 rounded flex flex-col justify-center items-center w-12 md:w-16 px-1.5">
              <span className="hours font-bold text-lg lg:text-xl">
                {seconds}
              </span>
              <span className=" font-medium lg:font-extralight">Sec</span>
            </div>
          </div>
        </div>
        <div className="offer-detail col-span-5 xl:grid flex grid-cols-10 lg:grid-cols-5 overflow-x-auto xl:justify-center">
          {products.slice(7, 12).map((product) => (
            <div
              className="offer-details cursor-pointer flex flex-col p-4 justify-between items-center"
              key={product.id}
              onClick={() =>
                handelChosenProduct(product.id, product.name, product.category)
              }
            >
              <div className="offer-image h-24  lg:h-32 flex items-center">
                <img src={product.img1} alt="" className=" pb-2" />
              </div>
              <div className="offer-info flex flex-col bg-red items-center ">
                <span className="text-center text-sm py-1">
                  {product.name.slice(0, 18)}...
                </span>
                <span className="discount rounded-xl text-center font-semibold bg-red-200 text-red-500 text-sm px-2 w-fit">
                  -25%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
