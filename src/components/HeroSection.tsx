import React from "react";
import EmailForm from "./EmailForm";
import AnimatedGradient from "./ui-custom/AnimatedGradient";
import { Flame } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blaze-orange/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blaze-yellow/20 rounded-full blur-3xl -z-10"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="px-4 py-2 rounded-full bg-blaze-orange/20 border border-blaze-orange/40 flex items-center gap-2">
              <Flame className="text-blaze-orange h-5 w-5" />
              <span className="text-sm font-medium text-blaze-orange">
                The Last Morning App You'll Ever Need
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up text-white">
            Revolutionary Morning Routine
            <span className="text-blaze-orange"> Coach</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl animate-slide-up delay-100">
            BlazeUp combines{" "}
            <strong className="text-white">
              enforced distraction blocking
            </strong>
            , <strong className="text-white">AI-driven personalization</strong>,
            and{" "}
            <strong className="text-white">
              real-time social accountability
            </strong>{" "}
            to transform your morning struggle into a gamified journey of
            personal growth.
          </p>

          <div className="w-full max-w-md mx-auto mb-12 animate-slide-up delay-200">
            <EmailForm variant="hero" />
          </div>

          {/* <div className="relative animate-float"> */}
          {/* <AnimatedGradient variant="fire" className="rounded-full p-2"> */}
          {/* <img 
                src="/lovable-uploads/c4992289-4eb3-45dd-93a3-4ad1f21d05d2.png" 
                alt="BlazeUp Mascot" 
                className="h-40 w-auto"
              /> */}
          {/* </AnimatedGradient> */}
          {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/10 rounded-full blur-md"></div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
