import Image from "next/image";
import React from "react";
import c1 from "/public/img-1-fd8eca61.png";
import c2 from "/public/img-2-ca0ed73a.png";

const Sbcard = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 px-5 lg:px-20 pt-10">
      <div className="image1 hover:scale-105 transition duration-300">
        <div className="grid lg:grid-cols-2 lg:ps-10 justify-center text-center lg:text-start items-center gap-10 py-10">
          <div>
            <Image priority={false} src={c1} alt="" width={100} height={100} />
          </div>
          <div>
            <button className="text-md font-bold text-white bg-black px-2 py-1">
              MOCHA LATTE
            </button>
            <h1 className="text-4xl font-bold text-white mt-4">
              Buy 1 <span className="text-[#CA8E46]">Get 1</span>
            </h1>
            <button className="px-5 py-2 text-white border hover:bg-[#CA8E46] mt-5">
              ORER NOW
            </button>
            <p className="text-white mt-5">*Limited time offer</p>
          </div>
        </div>
      </div>
      <div className="image2 hover:scale-105 transition duration-300">
        <div className="grid lg:grid-cols-2 lg:ps-10 justify-center text-center lg:text-start items-center gap-10  py-10 ">
          <div>
            <Image priority={false} src={c2} alt="" width={100} height={100} />
          </div>
          <div>
            <button className="text-md font-bold text-white bg-black px-2 py-1">
              CARAMEL LATE
            </button>
            <h1 className="text-4xl font-bold text-white mt-4">
              Free <span className="text-[#CA8E46]">Upsize</span>
            </h1>
            <button className="px-5 py-2 text-white border hover:bg-[#CA8E46] mt-5">
              ORER NOW
            </button>
            <p className="text-white mt-5">*Limited time offer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sbcard;
