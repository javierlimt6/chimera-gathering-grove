
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import EmailForm from '@/components/EmailForm';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/ui-custom/AnimatedGradient';
import { Flame, Zap, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-chimera-light text-chimera-orange rounded-full inline-block mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover the Magic of Chimera</h2>
            <p className="text-muted-foreground text-lg">
              Our platform combines cutting-edge technology with intuitive design to bring you the best experience possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="Blazing Fast"
              description="Experience lightning-speed performance that keeps up with your workflow without any lag."
              icon={Zap}
              delay="delay-100"
            />
            <FeatureCard 
              title="Secure & Private"
              description="Your data is protected with state-of-the-art encryption and privacy-first design principles."
              icon={Lock}
              delay="delay-200"
            />
            <FeatureCard 
              title="Intuitive Design"
              description="Our user-friendly interface makes navigation and usage a breeze for everyone."
              icon={Sparkles}
              delay="delay-300"
            />
            <FeatureCard 
              title="Smart Integration"
              description="Seamlessly connects with your favorite tools and platforms for a unified experience."
              icon={Flame}
              delay="delay-400"
            />
            <FeatureCard 
              title="Customizable"
              description="Tailor the platform to your specific needs with flexible customization options."
              icon={Sparkles}
              delay="delay-500"
            />
            <FeatureCard 
              title="Always Evolving"
              description="Constant updates and new features ensure you're always ahead of the curve."
              icon={Flame}
              delay="delay-600"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 relative bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-chimera-yellow/10 rounded-full blur-3xl -z-10"></div>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="px-3 py-1 text-sm font-medium bg-chimera-light text-chimera-orange rounded-full inline-block mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We're Building the Future of Digital Experience</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Chimera started with a simple idea: to create a platform that truly understands and adapts to how people work and connect in the digital age.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Our team of passionate innovators is dedicated to crafting an experience that's not just functional, but delightful. We believe technology should enhance human connection, not replace it.
              </p>
              <Button 
                className="bg-chimera-orange text-white hover:bg-chimera-orange/90 gap-2 group"
              >
                <span>Learn more about our story</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <AnimatedGradient className="rounded-2xl p-3">
                <div className="relative animate-float">
                  <img 
                    src="/lovable-uploads/c4992289-4eb3-45dd-93a3-4ad1f21d05d2.png" 
                    alt="Chimera Mascot" 
                    className="h-64 w-auto"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 rounded-full blur-md"></div>
                </div>
              </AnimatedGradient>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative bg-gradient-to-br from-chimera-orange/10 to-chimera-yellow/10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Be among the first to experience Chimera when we launch. Sign up for our waitlist today and get exclusive early access.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
