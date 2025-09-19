import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";
import AnimatedGradient from "@/components/ui-custom/AnimatedGradient";
import {
  Flame,
  Zap,
  Lock,
  Sparkles,
  ArrowRight,
  AlarmClock,
  Smartphone,
  Trophy,
  Users,
  Shield,
  Brain,
  Clock,
  Gamepad2,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = anchor.getAttribute("href")?.slice(1);
        const element = document.getElementById(id || "");

        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <section id="problem" className="py-24 relative bg-white">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blaze-orange/5 rounded-full blur-3xl -z-10"></div>
        <div className="container">
          {/* Problem Statement */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-red-100 text-red-600 rounded-full inline-block mb-4">
              The Morning Crisis
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              77% of Youths Want Better Mornings.
              <br />
              Only 29% Have Them.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Digital distractions are hijacking our mornings. 71% of people
              check their phones within 10 minutes of waking, spending 2+ hours
              on screens before starting their day productively.
            </p>
          </div>

          {/* Problem Illustrations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 mb-4">
                <img
                  src="/blazeup_slides/story_comicstripoversleep.png"
                  alt="Oversleep and rushing"
                  className="w-full h-48 object-contain mx-auto"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">The Endless Snooze</h3>
              <p className="text-muted-foreground">
                Alarm after alarm, but the bed always wins
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 mb-4">
                <img
                  src="/blazeup_slides/story_failedmorningroutine.png"
                  alt="Failed morning routine"
                  className="w-full h-48 object-contain mx-auto"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Distraction Spiral</h3>
              <p className="text-muted-foreground">
                One notification leads to hours of scrolling
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 mb-4">
                <img
                  src="/blazeup_slides/story_lateforwork.png"
                  alt="Late for work stress"
                  className="w-full h-48 object-contain mx-auto"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Rushed & Stressed</h3>
              <p className="text-muted-foreground">
                Starting every day behind schedule
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="bg-red-100 p-3 rounded-lg">
                <Smartphone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Digital Addiction Crisis
                </h3>
                <p className="text-muted-foreground">
                  71% check phones within 10 minutes of waking. The dopamine
                  rush from social media steals your most productive hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-orange-100 p-3 rounded-lg">
                <AlarmClock className="h-6 w-6 text-blaze-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">The Routine Gap</h3>
                <p className="text-muted-foreground">
                  Despite wanting structure, most people lack the tools and
                  discipline to build consistent morning habits that stick.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 relative bg-gradient-to-b from-amber-50 to-white">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blaze-yellow/20 rounded-full blur-3xl -z-10"></div>
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-blaze-light text-blaze-orange rounded-full inline-block mb-4">
              The Last Morning App You'll Ever Need
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet BlazeUp: Your Revolutionary
              <br />
              Morning Routine Coach
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Unlike other productivity apps that rely on willpower alone,
              BlazeUp combines <strong>enforced distraction blocking</strong>,
              <strong>gamified habit building</strong>, and{" "}
              <strong>real-time social accountability</strong> to transform your
              mornings.
            </p>
          </div>

          {/* Meet Blaze Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">
                Meet Blaze, Your Personal Companion
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Your virtual companion that grows stronger with your
                consistency. Complete morning tasks and earn{" "}
                <strong>wood</strong> - a virtual currency that feeds and
                strengthens Blaze. The more consistent you are, the more your
                Blaze flourishes.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Fail to complete your routine, and Blaze's fire begins to dim.
                But keep the streak alive, and watch as your morning guardian
                blazes with pride, creating a visual representation of your
                growth!
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8">
                <div className="flex justify-center items-center gap-6">
                  <div className="relative animate-float">
                    <img
                      src="/blazeup_slides/blazeupmascots.png"
                      alt="Blaze - Your Morning Companion"
                      className="h-64 w-auto mx-auto"
                    />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 rounded-full blur-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Process */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-8">
              How BlazeUp Revolutionizes Your Mornings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-4">
                  <img
                    src="/blazeup_slides/story_planningbeforesleep.png"
                    alt="Plan your routine"
                    className="w-full h-48 object-contain mx-auto"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2">1. Plan Your Routine</h4>
                <p className="text-muted-foreground">
                  Set up your personalized morning routine with flexible,
                  essential tasks
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-4">
                  <img
                    src="/blazeup_slides/screen_applocked.png"
                    alt="Apps get locked"
                    className="w-full h-48 object-contain mx-auto"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2">
                  2. Distractions Blocked
                </h4>
                <p className="text-muted-foreground">
                  Social media apps lock until you complete your routine - no
                  willpower needed
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 mb-4">
                  <img
                    src="/blazeup_slides/screen_routinecomplete.png"
                    alt="Routine completed"
                    className="w-full h-48 object-contain mx-auto"
                  />
                </div>
                <h4 className="font-bold text-lg mb-2">
                  3. Blaze Grows Stronger
                </h4>
                <p className="text-muted-foreground">
                  Earn wood, feed Blaze, and watch your companion thrive with
                  your success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pt-12 pb-24 relative">
        {/* Changed py-24 to pt-12 pb-24 to reduce top padding */}
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-blaze-light text-blaze-orange rounded-full inline-block mb-4">
              Revolutionary Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes BlazeUp Different
            </h2>
            <p className="text-muted-foreground text-lg">
              We combine enforced blocking, AI personalization, social
              accountability, and rewarding gamification - the complete morning
              routine ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <FeatureCard
              title="Enforced Distraction Blocking"
              description="Temporarily locks Instagram, TikTok & other distracting apps until your routine is complete - no willpower required."
              icon={Shield}
              delay="delay-100"
            />
            <FeatureCard
              title="AI-Driven Personalization"
              description="Gemma 3N edge AI analyzes your patterns and optimizes timing and sequencing for maximum success."
              icon={Brain}
              delay="delay-200"
            />
            <FeatureCard
              title="Real-Time Social Feed"
              description="See which friends have started their routines, share achievements, and build accountability together."
              icon={Users}
              delay="delay-300"
            />
            <FeatureCard
              title="Gamified Growth System"
              description="Earn wood to feed Blaze, unlock achievements, and watch your virtual companion flourish with consistency."
              icon={Gamepad2}
              delay="delay-400"
            />
          </div>

          {/* App UI Mockups */}
          <div className="mt-16 mb-8">
            <h3 className="text-2xl font-bold text-center mb-12">
              See BlazeUp in Action
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-4">
                  <img
                    src="/blazeup_slides/screen_applocked.png"
                    alt="Apps Locked Screen"
                    className="w-full h-64 object-contain mx-auto"
                  />
                </div>
                <h4 className="font-medium text-blaze-dark mb-2">
                  Distraction Blocking
                </h4>
                <p className="text-sm text-muted-foreground">
                  Social apps locked until routine completion
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-4">
                  <img
                    src="/blazeup_slides/screen_routine.png"
                    alt="Morning Routine Screen"
                    className="w-full h-64 object-contain mx-auto"
                  />
                </div>
                <h4 className="font-medium text-blaze-dark mb-2">
                  Smart Routine Builder
                </h4>
                <p className="text-sm text-muted-foreground">
                  Personalized tasks that actually stick
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-4">
                  <img
                    src="/blazeup_slides/screen_friends.jpg"
                    alt="Social Feed Screen"
                    className="w-full h-64 object-contain mx-auto"
                  />
                </div>
                <h4 className="font-medium text-blaze-dark mb-2">
                  Real-Time Social Feed
                </h4>
                <p className="text-sm text-muted-foreground">
                  See friends' progress and stay motivated
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-4">
                  <img
                    src="/blazeup_slides/screen_progress.png"
                    alt="Progress Tracking Screen"
                    className="w-full h-64 object-contain mx-auto"
                  />
                </div>
                <h4 className="font-medium text-blaze-dark mb-2">
                  Growth Analytics
                </h4>
                <p className="text-sm text-muted-foreground">
                  Watch Blaze grow with your consistency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section id="about" className="py-24 relative bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blaze-yellow/10 rounded-full blur-3xl -z-10"></div>
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-blaze-light text-blaze-orange rounded-full inline-block mb-4">
              Why BlazeUp Wins
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Complete Morning Routine Ecosystem
            </h2>
            <p className="text-muted-foreground text-lg">
              Unlike Habitica's complex RPG elements, Fabulous's gentle nudges,
              or Forest's simple focus timers - BlazeUp uniquely combines{" "}
              <strong>hard enforcement</strong>,{" "}
              <strong>morning-specific design</strong>, and{" "}
              <strong>real-time social accountability</strong> tailored for Gen
              Z and Millennials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6">
                Built for the Fast-Paced Youth
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Morning-Specific Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Unlike general habit trackers, we're laser-focused on
                      morning routines
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Hard Enforcement</h4>
                    <p className="text-sm text-muted-foreground">
                      Actually blocks distracting apps - no relying on willpower
                      alone
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Real-Time Social Dashboard
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      See friends' progress instantly, not complex guild systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Gamepad2 className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Intuitive Gamification</h4>
                    <p className="text-sm text-muted-foreground">
                      Simple companion growth, not overwhelming RPG mechanics
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-blaze-orange/10 to-blaze-yellow/10 rounded-2xl p-8">
                <div className="relative animate-float">
                  <img
                    src="/blazeup_slides/manymascots.png"
                    alt="BlazeUp Community"
                    className="w-full h-auto"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 rounded-full blur-md"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-br from-blaze-orange/5 to-blaze-yellow/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              The Market Opportunity
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blaze-orange mb-2">
                  77%
                </div>
                <p className="text-sm text-muted-foreground">
                  Want structured morning routines
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blaze-orange mb-2">
                  29%
                </div>
                <p className="text-sm text-muted-foreground">
                  Are satisfied with current mornings
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blaze-orange mb-2">
                  71%
                </div>
                <p className="text-sm text-muted-foreground">
                  Check phones within 10 minutes
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blaze-orange mb-2">
                  $9B
                </div>
                <p className="text-sm text-muted-foreground">
                  Target market opportunity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-gradient-to-br from-blaze-orange/10 via-amber-100/30 to-blaze-yellow/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Morning Revolution
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Be among the first to experience{" "}
              <strong>the last morning routine app you'll ever need</strong>.
              Join thousands already transforming their mornings with BlazeUp's
              revolutionary approach to habit building.
            </p>

            {/* Value propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-blaze-orange mb-1">
                  21 Days
                </div>
                <p className="text-sm text-muted-foreground">
                  Average time to build lasting habits
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-blaze-orange mb-1">
                  Early Access
                </div>
                <p className="text-sm text-muted-foreground">
                  Be first to try BlazePass features
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-blaze-orange mb-1">
                  Free Beta
                </div>
                <p className="text-sm text-muted-foreground">
                  No cost during beta testing
                </p>
              </div>
            </div>

            <div className="max-w-md mx-auto">
              <EmailForm />
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Ready to unlock your daily potential and fire up your mornings? 🔥
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
