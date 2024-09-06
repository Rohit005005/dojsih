import Image from "next/image";


function Hero2() {
  return (
    <section className="pt-8 lg:pb-5 sm:pb-20 pb-4 bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#89FF80,#EAEEFE_66%)] ">
        <div className="md:flex justify-between  items-center px-10">
          <div className=" sm:ml-10">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 0.1 is here
            </div>
            <h1 className="text-5xl lg:text-6xl sm:text-left text-center font-bold tracking-tighter bg-gradient-to-b from-black to-[#36E61D] text-transparent bg-clip-text mt-6">
            Skip the Lines, Unlock the Wonders – Book Your Museum Tickets in Seconds!
            </h1>
            
          </div>
          <div className="sm:w-[1600px] w-[350px] flex justify-center  items-center  ">
            <Image src={"/heroimg.png"} alt="icon" width={500} height={400} />
          </div>
      </div>
    </section>
  );
}

export default Hero2;
