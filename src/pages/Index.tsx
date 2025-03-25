import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import EmailForm from '@/components/EmailForm';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/ui-custom/AnimatedGradient';
import { Flame, Zap, Lock, Sparkles, ArrowRight, AlarmClock, Smartphone, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
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
      
      {/* Problem Section */}
      <section id="problem" className="py-24 relative bg-white">
        <div className="absolute top-0 left-0 w-96 h-96 bg-chimera-orange/5 rounded-full blur-3xl -z-10"></div>
        <div className="container">
          {/* Two-column layout for heading and image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="md:pr-8">
              <div className="md:text-left text-center">
                <span className="px-3 py-1 text-sm font-medium bg-chimera-light text-chimera-orange rounded-full inline-block mb-4">
                  The Challenge
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">This is probably you at 9am.</h2>
                <p className="text-muted-foreground text-lg">
                  Endless scrolling. Silenced alarms. Another morning wasted to the dopamine rush of social media. We've all been there.
                </p>
              </div>
            </div>
            
            <div>
              <AnimatedGradient variant="fire" className="rounded-2xl p-4">
                <img 
                  src="/woman_in_bed.jpg" 
                  alt="Morning distractions" 
                  className="w-full h-auto rounded-xl shadow-lg" 
                />
              </AnimatedGradient>
            </div>
          </div>
          
          {/* Icons section - remains the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="bg-red-100 p-3 rounded-lg">
                <AlarmClock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Morning Discipline Fading</h3>
                <p className="text-muted-foreground">Studies show that lack of a morning routine disrupts mental clarity and emotional regulation throughout your day.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Smartphone className="h-6 w-6 text-chimera-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Digital Distractions</h3>
                <p className="text-muted-foreground">The constant dopamine hits from social media are stealing your most productive hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className="py-24 relative bg-gradient-to-b from-amber-50 to-white">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-chimera-yellow/20 rounded-full blur-3xl -z-10"></div>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-chimera-light text-chimera-orange rounded-full inline-block mb-4">
              Our Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Chimera: Your Morning Guardian</h2>
            <p className="text-muted-foreground text-lg">
              Chimera empowers you to achieve daily goals, cultivate consistency, and unlock your full potential by transforming your morning routine.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8">
            {/* Reduced mb-16 to mb-8 */}
            <div className="mb-8">
              <AnimatedGradient className="rounded-2xl p-3">
                <div className="relative animate-float">
                  <img 
                    src="/lovable-uploads/c4992289-4eb3-45dd-93a3-4ad1f21d05d2.png" 
                    alt="Chimera Mascot" 
                    className="h-64 w-auto mx-auto"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 rounded-full blur-md"></div>
                </div>
              </AnimatedGradient>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">How Chimera Works</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Meet your new morning companion - a friendly fire spirit that grows stronger as you complete your morning routine. Feed Chimera with wood by completing tasks, and watch its flame grow brighter with each accomplishment.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Fail to complete your routine, and Chimera's fire begins to dim. But keep the streak alive, and watch as your morning guardian blazes with pride!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="pt-12 pb-24 relative">
        {/* Changed py-24 to pt-12 pb-24 to reduce top padding */}
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-chimera-light text-chimera-orange rounded-full inline-block mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fuel Your Morning Fire</h2>
            <p className="text-muted-foreground text-lg">
              Our platform combines smart app control, gamification, and community support to transform your morning routine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              title="App Locking"
              description="Temporarily locks distracting apps until your morning routine is complete, helping you stay focused."
              icon={Lock}
              delay="delay-100"
            />
            <FeatureCard 
              title="Routine Builder"
              description="Create flexible morning routines that work for you, with essential apps remaining accessible."
              icon={AlarmClock}
              delay="delay-200"
            />
            <FeatureCard 
              title="Gamification"
              description="Earn wood to feed Chimera's flame, unlock achievements, and watch your fire spirit grow stronger."
              icon={Trophy}
              delay="delay-300"
            />
            <FeatureCard 
              title="Community"
              description="Connect with friends, share progress, and keep each other accountable with community challenges."
              icon={Users}
              delay="delay-400"
            />
          </div>

          {/* App UI Mockups */}
          <div className="mt-24 mb-8">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="relative w-[280px] h-[560px] rounded-[40px] border-8 border-gray-900 bg-gray-800 overflow-hidden shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-lg"></div>
                <div className="h-full w-full bg-gradient-to-b from-orange-100 to-amber-50 p-2">
                  <div className="rounded-3xl overflow-hidden h-full w-full bg-FFCF95 flex items-center justify-center">
                  
                  <img 
                    src="/home.png" 
                    alt="Home Screen (Locked)" 
                    className="h-auto w-auto"
                  />
                  </div>
                </div>
              </div>
              
              <div className="relative w-[280px] h-[560px] rounded-[40px] border-8 border-gray-900 bg-gray-800 overflow-hidden shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-lg"></div>
                <div className="h-full w-full bg-gradient-to-b from-orange-100 to-amber-50 p-2">
                  <div className="rounded-3xl overflow-hidden h-full w-full bg-FFCF95 flex items-center justify-center">
                  <img 
                    src="/notlocked.png" 
                    alt="Home Screen (Not Locked)" 
                    className="h-auto w-auto"
                  />
                  </div>
                </div>
              </div>
              
              <div className="relative w-[280px]">
                  <img 
                    src="/lockscreen.png" 
                    alt="Home Screen (Not Locked)" 
                    className="h-auto w-auto"
                  />
              </div>

            </div>
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
                Our Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stoke the Flames of Productivity</h2>
              <p className="text-muted-foreground text-lg mb-6">
                At Chimera, we believe the first hour of your day determines the quality of your waking hours. Our app helps you reclaim this critical time.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                By combining motivation, gamification, and personalisation, we make building consistent morning habits both enjoyable and rewarding. Let's reignite our morning potential together!
              </p>
              {/* <Button 
                className="bg-chimera-orange text-white hover:bg-chimera-orange/90 gap-2 group"
              >
                <span>Discover our story</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button> */}
            </div>
            <div className="order-1 md:order-2 flex justify-center">
                <div className="relative animate-float">
                  <img 
                    src="/ai_breakfree.png" 
                    alt="Break Free (AI_generated)" 
                    className="h-64 w-auto"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 rounded-full blur-md"></div>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative bg-gradient-to-br from-chimera-orange/10 via-amber-100/30 to-chimera-yellow/10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ignite Your Mornings?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Be among the first to experience Chimera, coming soon. Sign up to join as a beta tester now, and get the earliest updates for when we launch.
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
