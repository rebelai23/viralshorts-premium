import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircle, XCircle, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Free Tier",
      price: "0",
      interval: "/month",
      description: "Perfect for beginners to explore AI shorts.",
      features: [
        { text: "5 Shorts generations/month", included: true },
        { text: "Basic AI analysis", included: true },
        { text: "Standard export quality", included: true },
        { text: "Community support", included: true },
        { text: "Advanced AI features", included: false },
        { text: "Priority customer support", included: false },
        { text: "Unlimited generations", included: false },
        { text: "Custom branding", included: false },
      ],
      cta: "Get Started",
      highlight: false,
      delay: 100
    },
    {
      name: "Pro Creator",
      price: "29",
      interval: "/month",
      description: "For growing creators ready to scale their content.",
      features: [
        { text: "50 Shorts generations/month", included: true },
        { text: "Advanced AI analysis & optimization", included: true },
        { text: "HD export quality (1080p)", included: true },
        { text: "Priority customer support", included: true },
        { text: "Access to all AI tools", included: true },
        { text: "Customizable templates", included: true },
        { text: "Early access to new features", included: true },
        { text: "Unlimited cloud storage", included: false },
      ],
      cta: "Choose Pro",
      highlight: true,
      delay: 200
    },
    {
      name: "Elite Agency",
      price: "99",
      interval: "/month",
      description: "Designed for agencies and professional teams.",
      features: [
        { text: "Unlimited Shorts generations", included: true },
        { text: "Comprehensive AI suite", included: true },
        { text: "4K export quality", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Team collaboration features", included: true },
        { text: "API access & integrations", included: true },
        { text: "Custom AI model training", included: true },
        { text: "White-label options", included: true },
      ],
      cta: "Contact Sales",
      highlight: false,
      delay: 300
    },
  ];

  return (
    <div className="bg-bg font-body text-text min-h-screen">
      <Navbar />
      <main className="pt-20 py-12 px-4 md:px-8">
        <section className="container mx-auto text-center py-12">
          <AnimatedSection delay={0}>
            <h1 className="text-4xl md:text-6xl font-heading text-text mb-4 animate-neon-glow">Our Flexible Pricing Plans</h1>
            <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-12">
              Choose the plan that best fits your content creation needs, from aspiring individual creators to large agencies.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection key={index} delay={plan.delay}>
                <Card className={`relative p-8 h-full flex flex-col justify-between overflow-hidden
                  ${plan.highlight ? 'border-primary-glow border-2 shadow-primary-glow scale-[1.03] transform' : ''}
                `}>
                  <div className="relative z-10 flex flex-col items-center">
                    {plan.highlight && (
                      <span className="inline-block bg-primary text-text text-xs font-bold px-4 py-1 rounded-full mb-4 animate-pulse">Most Popular</span>
                    )}
                    <h2 className="text-3xl font-heading text-text mb-3">{plan.name}</h2>
                    <p className="text-text-muted text-sm mb-6">{plan.description}</p>
                    <div className="flex items-baseline mb-8">
                      <DollarSign size={32} className="text-primary mr-1" />
                      <span className="text-6xl font-bold text-primary">{plan.price}</span>
                      <span className="text-xl text-text-muted">{plan.interval}</span>
                    </div>

                    <ul className="text-text-muted text-left space-y-3 mb-10 w-full max-w-[250px] mx-auto">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-center ${!feature.included ? 'opacity-60 line-through' : ''}`}>
                          {feature.included ? <CheckCircle size={18} className="mr-3 text-primary flex-shrink-0" /> : <XCircle size={18} className="mr-3 text-red-500 flex-shrink-0" />}
                          <span className="text-base">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-10 w-full mt-auto">
                    <Button
                      to={plan.cta === "Contact Sales" ? "#" : "/auth"}
                      variant={plan.highlight ? "primary" : "secondary"}
                      className="w-full justify-center text-lg"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-accent-glow opacity-5 blur-xl z-0 pointer-events-none"></div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA for any questions */}
        <section className="py-16 text-center">
          <AnimatedSection delay={0}>
            <h2 className="text-3xl font-heading text-text mb-4">Still Have Questions?</h2>
            <p className="text-lg text-text-muted mb-8">
              Our team is here to help. Reach out to us for tailored solutions or more details.
            </p>
            <Button to="#" variant="secondary" className="text-lg">Contact Sales</Button>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;