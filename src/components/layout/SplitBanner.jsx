import React from "react";
import Button from "../ui/Button";
import womenShorts from "../../assets/womenShorts.mp4";
import menShorts from "../../assets/menShorts.jpg";

const SplitBanner = () => {
  return (
    <section className="w-full pb-4">
      <div className="grid grid-cols-2 gap-8">
        <div className="relative w-full aspect-4/5 md:aspect-4/3 overflow-hidden cursor-pointer">
          <img
            src={`https://images.unsplash.com/photo-1717620378188-bf53e1df3bfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBsYXRlc3xlbnwwfHwwfHx8MA%3D%3D`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8">
            <Button variant="white">SHOP HOME + DECOR GIFTS</Button>
          </div>
        </div>
        <div className="relative w-full aspect-4/5 md:aspect-4/3 overflow-hidden cursor-pointer">
          <img
            src={`https://images.unsplash.com/photo-1676854121021-66b6a8ddb08d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8">
            <Button variant="white">SHOP WATER BOTTLES + THUMBLERS</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitBanner;
