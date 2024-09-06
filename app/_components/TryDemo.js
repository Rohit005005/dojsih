import React from "react";
import ChatbotButton from "./ChatbotButton";

function TryDemo() {
  return (
    <section className="pt-8 lg:pb-5 sm:pb-20 pb-4 bg-[radial-gradient(ellipse_200%_100%_at_top_right,#89FF80,#EAEEFE_66%)] flex justify-center gap-20 items-center h-[400px]">
        <ChatbotButton/>
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-5xl lg:text-6xl sm:text-left text-center font-bold">
          Check out the
        </h1>
        <h1 className="text-5xl lg:text-6xl sm:text-left text-center font-bold tracking-tighter bg-gradient-to-b from-black to-[#36E61D] text-transparent bg-clip-text">
          Demo !!
        </h1>
      </div>
    </section>
  );
}

export default TryDemo;
