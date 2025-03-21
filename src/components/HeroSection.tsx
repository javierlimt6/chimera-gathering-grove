
import React from 'react';
import EmailForm from './EmailForm';
import AnimatedGradient from './ui-custom/AnimatedGradient';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-chimera-orange/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chimera-yellow/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-3 py-1 text-sm font-medium bg-chimera-light text-chimera-orange rounded-full">
              Coming Soon
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
            Ignite Your Digital Experience With
            <span className="text-chimera-orange"> Chimera</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up delay-100">
            Join our waitlist to be the first to experience a revolutionary app that transforms the way you connect, create, and collaborate.
          </p>
          
          <div className="w-full max-w-md mx-auto mb-12 animate-slide-up delay-200">
            <EmailForm variant="hero" />
          </div>
          
          <div className="relative animate-float">
            <AnimatedGradient className="rounded-full p-2">
              <img 
                src="/lovable-uploads/c4992289-4eb3-45dd-93a3-4ad1f21d05d2.png" 
                alt="Chimera Mascot" 
                className="h-40 w-auto"
              />
            </AnimatedGradient>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/10 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
