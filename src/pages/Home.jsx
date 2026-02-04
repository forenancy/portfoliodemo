import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import {
  Target, Award, TrendingUp, CheckCircle, ArrowRight,
  BookOpen, Zap, Shield, Clock
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Target,
      title: 'Goal-Oriented Approach',
      description: 'Define your career goals and get personalized guidance to achieve them faster.',
    },
    {
      icon: Award,
      title: 'Industry Best Practices',
      description: 'Learn from recruitment experts and successful professionals in your field.',
    },
    {
      icon: TrendingUp,
      title: 'Track Your Progress',
      description: 'Monitor your networking growth and career development milestones.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data and career information are always secure and private.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Build a comprehensive professional profile that showcases your skills and experience.',
    },
    {
      number: '02',
      title: 'Optimize Your Presence',
      description: 'Use our guides to enhance your LinkedIn and resume for maximum impact.',
    },
    {
      number: '03',
      title: 'Expand Your Network',
      description: 'Connect with professionals using proven networking strategies.',
    },
    {
      number: '04',
      title: 'Land Opportunities',
      description: 'Leverage your network to discover and secure your dream opportunities.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'ProNetwork helped me land my dream job. The LinkedIn optimization guide was a game-changer!',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at Meta',
      content: 'The resume builder is incredibly intuitive. I received more callbacks within a week of updating my resume.',
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      content: 'The networking tips helped me build valuable connections that accelerated my career growth.',
      avatar: 'ER',
    },
  ];

  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose ProNetwork?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We provide comprehensive tools and resources to help you succeed in your professional journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{feature.title}</h3>
                <p className="text-secondary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Follow our proven four-step process to transform your professional presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card h-full">
                  <span className="text-5xl font-bold text-primary-100">{step.number}</span>
                  <h3 className="text-xl font-semibold text-secondary-900 mt-4 mb-2">{step.title}</h3>
                  <p className="text-secondary-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with ProNetwork.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-sm text-secondary-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-secondary-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Start building your professional presence today with our free tools and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resume"
              className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-200 inline-flex items-center justify-center"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/linkedin-guide"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-200"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
