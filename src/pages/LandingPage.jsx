import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import {
  Sparkles,
  Zap,
  Share2,
  TrendingUp,
  Settings,
  Lightbulb,
  Video,
  Rocket,
  CheckCircle,
  Clock,
  BarChart2,
  Users,
  MessageCircle,
  DollarSign,
  Star,
  Eye,
  Megaphone,
  Palette,
  CloudUpload,
  Calendar,
  Speech,
  LayoutGrid
} from 'lucide-react';

const LandingPage = () => {
  const heroMockupGradient = {
    background: 'linear-gradient(135deg, rgba(0, 194, 255, 0.2) 0%, rgba(255, 0, 128, 0.2) 100%)',
    boxShadow: '0 0 30px rgba(0, 194, 255, 0.3), 0 0 60px rgba(255, 0, 128, 0.3)',
    borderRadius: 'var(--radius)',
  };

  const dashboardMockupContent = (
    <div className="relative w-full h-full p-4 bg-surface-2 rounded-large border border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-accent-glow opacity-10 blur-xl z-0 pointer-events-none"></div>
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-glow rounded-full mix-blend-screen opacity-15 animate-pulse z-0"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-heading text-primary">Dashboard Overview</h4>
          <span className="text-text-muted text-sm flex items-center"><Clock size={16} className="mr-1"/> Realtime</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-surface p-3 rounded-md border border-border">
            <p className="text-sm text-text-muted">Views</p>
            <p className="text-xl font-bold text-text flex items-center"><Eye size={18} className="mr-1 text-primary"/> 1.8M</p>
          </div>
          <div className="bg-surface p-3 rounded-md border border-border">
            <p className="text-sm text-text-muted">Generations</p>
            <p className="text-xl font-bold text-text flex items-center"><Video size={18} className="mr-1 text-accent"/> 2450</p>
          </div>
        </div>
        <div className="flex-grow bg-surface p-3 rounded-md border border-border flex items-center justify-center">
          <div className="w-full h-full relative">
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-border"></div>
            <div className="absolute bottom-0 left-[10%] w-3 h-[60%] bg-primary rounded-t-sm opacity-70"></div>
            <div className="absolute bottom-0 left-[30%] w-3 h-[80%] bg-accent rounded-t-sm opacity-70"></div>
            <div className="absolute bottom-0 left-[50%] w-3 h-[40%] bg-primary rounded-t-sm opacity-70"></div>
            <div className="absolute bottom-0 left-[70%] w-3 h-[90%] bg-accent rounded-t-sm opacity-70"></div>
            <div className="absolute bottom-0 left-[90%] w-3 h-[50%] bg-primary rounded-t-sm opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Virality',
      description: 'Our advanced AI analyzes your long videos to extract the most engaging, shareable moments, guaranteeing viral potential.',
      delay: 100
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Editing',
      description: 'Transform hours of footage into captivating shorts in minutes, not days. Optimize your workflow and content output.',
      delay: 200
    },
    {
      icon: Share2,
      title: 'Multi-Platform Export',
      description: 'Seamlessly export your AI-generated shorts tailored for TikTok, Instagram Reels, YouTube Shorts, and more.',
      delay: 300
    },
    {
      icon: TrendingUp,
      title: 'Trend Forecasting',
      description: 'Stay ahead of the curve with AI-driven insights into emerging content trends, helping you create what\'s hot now.',
      delay: 400
    },
    {
      icon: Settings,
      title: 'Customizable Output',
      description: 'Maintain creative control with intuitive tools to refine AI suggestions, adjust edits, and add your personal touch.',
      delay: 500
    },
    {
      icon: Lightbulb,
      title: 'Idea Generation',
      description: 'Banish creator\'s block! Our AI suggests fresh content angles and concepts based on your niche and audience.',
      delay: 600
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: 'Upload Your Video',
      description: 'Simply upload your long-form content. Our platform supports various formats and sizes.',
      icon: CloudUpload
    },
    {
      number: 2,
      title: 'AI Transforms & Optimizes',
      description: 'Our intelligent algorithms analyze your video to identify viral segments, add dynamic captions, and optimize for platforms.',
      icon: Sparkles
    },
    {
      number: 3,
      title: 'Review & Export',
      description: 'Fine-tune your shorts, then export directly to your favorite social media platforms or download for later.',
      icon: Rocket
    },
  ];

  const stats = [
    { value: '1.2M+', label: 'Shorts Generated', delay: 100 },
    { value: '98%', label: 'Customer Satisfaction', delay: 200 },
    { value: '300K+', label: 'Creators Empowered', delay: 300 },
    { value: '10x', label: 'Faster Content Creation', delay: 400 },
  ];

  const testimonials = [
    {
      quote: "ViralShorts AI changed my entire content strategy. My engagement rates have skyrocketed!",
      author: "Alex R.",
      title: "YouTube Creator",
      delay: 100
    },
    {
      quote: "Finally, an AI tool that truly understands virality. The shorts it generates are pure gold.",
      author: "Maria S.",
      title: "Instagram Influencer",
      delay: 200
    },
    {
      quote: "I used to spend hours editing. Now, ViralShorts AI does it in minutes. Game changer!",
      author: "Jordan L.",
      title: "TikTok Creator",
      delay: 300
    },
  ];

  const faqItems = [
    {
      question: "What is ViralShorts AI?",
      answer: "ViralShorts AI is an advanced artificial intelligence platform that transforms your long-form video content into engaging, viral-ready short-form videos optimized for platforms like TikTok, Instagram Reels, and YouTube Shorts."
    },
    {
      question: "How does the AI identify viral moments?",
      answer: "Our proprietary AI analyzes various factors such as audience retention, sudden changes in action, emotional cues, speech patterns, and trending topics to pinpoint the most captivating segments of your video."
    },
    {
      question: "Can I customize the AI-generated shorts?",
      answer: "Absolutely! While our AI provides excellent initial drafts, you have full control to fine-tune edits, adjust captions, add music, and apply your unique creative flair before final export."
    },
    {
      question: "What platforms are supported for export?",
      answer: "You can export your shorts optimized for TikTok, Instagram Reels, YouTube Shorts, Facebook Stories, and more. We continuously update our export presets to match the latest platform specifications."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a free tier that allows you to experience the core features of ViralShorts AI with limited generations per month. No credit card required to start!"
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "We offer comprehensive support including a detailed knowledge base, video tutorials, and dedicated email support. Premium users also receive priority support."
    }
  ];

  return (
    <div className="bg-bg font-body text-text min-h-screen relative">
      <Navbar />

      <main className="pt-20"> {/* Adjust padding to prevent content from hiding behind sticky navbar */}
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center text-center py-20 px-4 md:px-8 hero-background-gradient">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            {/* Abstract AI patterns for hero */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-glow rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-500"></div>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <AnimatedSection delay={0} className="md:text-left text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-text leading-tight mb-6 animate-neon-glow">
                Turn Long Videos into <span className="text-primary block md:inline">Viral Shorts</span> with AI.
              </h1>
              <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto md:mx-0 mb-8">
                Unleash the full potential of your content. Our AI automatically identifies, edits, and optimizes the most engaging moments for maximum social media impact.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button to="/auth" variant="primary" className="text-lg">Start Free Trial</Button>
                <Button to="/#features" variant="secondary" className="text-lg">Learn More</Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200} className="relative flex justify-center md:justify-end animate-float-mockup">
              <div className="w-full max-w-md h-auto aspect-[16/9] rounded-large bg-surface-2 p-3 border border-border hero-mockup-glow relative">
                {dashboardMockupContent}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 md:px-8">
          <div className="container mx-auto text-center">
            <AnimatedSection delay={0}>
              <h2 className="text-3xl md:text-5xl font-heading text-text mb-4 animate-neon-glow">Unlock Your Content's Viral Potential</h2>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-12">
                ViralShorts AI provides a suite of powerful tools designed to elevate your content, save time, and maximize your reach across all platforms.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={feature.delay}>
                  <Card className="items-center text-center p-8 h-full">
                    <div className="bg-primary-glow/20 p-4 rounded-full mb-6 inline-block border border-primary-glow">
                      <feature.icon size={36} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-heading text-text mb-3">{feature.title}</h3>
                    <p className="text-text-muted text-sm">{feature.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-4 md:px-8 bg-surface-2 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <AnimatedSection delay={0}>
              <h2 className="text-3xl md:text-5xl font-heading text-text mb-4 animate-neon-glow">Your Path to Viral Content in 3 Steps</h2>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-12">
                Experience the simplicity of AI-powered content creation. Our intuitive workflow gets you from raw footage to viral shorts effortlessly.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {howItWorksSteps.map((step, index) => (
                <AnimatedSection key={step.number} delay={index * 150} className="relative z-10">
                  <Card className="items-center text-center p-8 h-full">
                    <div className="relative mb-6">
                      <div className="text-5xl font-heading text-primary bg-primary-glow/20 p-4 rounded-full inline-block border border-primary-glow relative z-10">{step.number}</div>
                      <div className="absolute inset-0 bg-primary-glow rounded-full blur-xl opacity-20 animate-pulse z-0"></div>
                    </div>
                    <h3 className="text-xl font-heading text-text mb-3 flex items-center justify-center">
                      <step.icon size={24} className="mr-2 text-accent"/> {step.title}
                    </h3>
                    <p className="text-text-muted text-sm">{step.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
              {/* Animated connectors */}
              <div className="absolute hidden md:flex top-1/2 left-0 right-0 justify-between items-center transform -translate-y-1/2 px-16 z-0 pointer-events-none">
                <div className="w-1/3 border-t-2 border-dashed border-primary-glow animate-pulse"></div>
                <div className="w-1/3 border-t-2 border-dashed border-primary-glow animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-20 px-4 md:px-8">
          <div className="container mx-auto text-center">
            <AnimatedSection delay={0}>
              <h2 className="text-3xl md:text-5xl font-heading text-text mb-4 animate-neon-glow">Impactful Results Speak for Themselves</h2>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-12">
                Join thousands of creators who are revolutionizing their content strategy with ViralShorts AI.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={stat.delay}>
                  <Card className="items-center text-center p-8 h-full">
                    <p className="text-5xl font-heading text-primary mb-3">{stat.value}</p>
                    <p className="text-lg text-text-muted">{stat.label}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 md:px-8 bg-surface-2 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <AnimatedSection delay={0}>
              <h2 className="text-3xl md:text-5xl font-heading text-text mb-4 animate-neon-glow">What Creators Say About ViralShorts AI</h2>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-12">
                Hear directly from our community of content creators who are achieving unprecedented growth.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index} delay={testimonial.delay}>
                  <Card className="p-8 h-full text-left relative overflow-hidden group hover:border-accent transition-all duration-300">
                    <div className="absolute top-0 right-0 h-full w-20 bg-accent-glow blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                    <Star size={32} className="text-primary mb-4" fill="var(--primary)" strokeWidth={0} />
                    <p className="text-text text-lg italic mb-6">"{testimonial.quote}"</p>
                    <p className="font-heading text-text font-medium">{testimonial.author}</p>
                    <p className="text-sm text-text-muted">{testimonial.title}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section (Link to PricingPage or embed simple version) */}
        <section id="pricing" className="py-20 px-4 md:px-8">
          <div className="container mx-auto text-center">
            <AnimatedSection delay={0}>
              <h2 className="text-3xl md:text-5xl font-heading text-text mb-4 animate-neon-glow">Simple & Transparent Pricing</h2>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-12">
                Find the perfect plan to boost your content creation, whether you're a beginner or a seasoned pro.
              </p>
            </AnimatedSection>
            {/* Simple pricing display linking to full pricing page */}
            <AnimatedSection delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-transparent opacity-5 blur-xl z-0 pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading text-text mb-4">Starter</h3>
                    <p className="text-text-muted mb-6">Perfect for new creators</p>
                    <p className="text-5xl font-bold text-primary mb-6">$0<span className="text-lg text-text-muted">/month</span></p>
                    <ul className="text-text-muted text-sm space-y-2 mb-8">
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> 5 Shorts/month</li>
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> Basic AI features</li>
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> Standard Export</li>
                    </ul>
                    <Button to="/auth" variant="secondary" className="w-full">Get Started</Button>
                  </div>
                </Card>

                <Card className="p-8 text-center relative overflow-hidden border-primary border-2 shadow-primary-glow">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-accent-glow opacity-15 blur-xl z-0 pointer-events-none"></div>
                  <div className="relative z-10">
                    <span className="inline-block bg-primary text-text text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">Most Popular</span>
                    <h3 className="text-2xl font-heading text-text mb-4">Pro Creator</h3>
                    <p className="text-text-muted mb-6">For growing content stars</p>
                    <p className="text-5xl font-bold text-primary mb-6">$29<span className="text-lg text-text-muted">/month</span></p>
                    <ul className="text-text-muted text-sm space-y-2 mb-8">
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> 50 Shorts/month</li>
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> Advanced AI features</li>
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> Priority Support</li>
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> HD Export</li>
                    </ul>
                    <Button to="/auth" variant="primary" className="w-full">Choose Plan</Button>
                  </div>
                </Card>

                <Card className="p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-glow to-transparent opacity-5 blur-xl z-0 pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading text-text mb-4">Enterprise</h3>
                    <p className="text-text-muted mb-6">Tailored for agencies & brands</p>
                    <p className="text-5xl font-bold text-primary mb-6">Custom</p>
                    <ul className="text-text-muted text-sm space-y-2 mb-8">
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> Unlimited Shorts</li>
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> Bespoke AI Models</li>
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> Dedicated Account Manager</li>
                      <li className="flex items-center justify-center"><CheckCircle size={16} className="mr-2 text-primary" /> API Access</li>
                    </ul>
                    <Button to="#" variant="secondary" className="w-full">Contact Sales</Button>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200} className="mt-12">
              <Link to="/pricing" className="text-primary hover:underline text-lg">View all pricing details &rarr;</Link>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 md:px-8 bg-surface-2 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <AnimatedSection delay={0}>
              <h2 className="text-3xl md:text-5xl font-heading text-text mb-4 animate-neon-glow">Frequently Asked Questions</h2>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-12">
                Have questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
              </p>
            </AnimatedSection>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <details className="group border border-border rounded-large bg-surface hover:border-primary transition-all duration-300 overflow-hidden">
                    <summary className="flex justify-between items-center py-4 px-6 cursor-pointer text-text font-medium group-hover:text-primary transition-colors duration-300">
                      {item.question}
                      <svg
                        className="flex-shrink-0 ml-8 h-5 w-5 transform group-open:rotate-180 transition-transform duration-300 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-4 text-text-muted text-sm border-t border-border mt-2 pt-2">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-primary-glow/20 relative overflow-hidden border-y border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-accent-glow opacity-10 blur-2xl z-0 pointer-events-none"></div>
          <div className="container mx-auto text-center relative z-10">
            <AnimatedSection delay={0}>
              <h2 className="text-3xl md:text-5xl font-heading text-text mb-4 animate-neon-glow">Ready to Go Viral?</h2>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-10">
                Join thousands of creators who are supercharging their content strategy with ViralShorts AI. Start generating your next viral hit today!
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Button to="/auth" variant="primary" className="text-xl px-10 py-4">
                Get Started for Free <Rocket size={24} className="ml-2"/>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
}