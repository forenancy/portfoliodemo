import { Link } from 'react-router-dom';
import {
  Target, Users, Lightbulb, Heart, Award, TrendingUp,
  CheckCircle, ArrowRight, Briefcase, Star
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We\'re committed to democratizing access to professional development resources for everyone.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously improve our tools and content based on industry trends and user feedback.',
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in the power of community and helping professionals support each other.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive to provide the highest quality resources and actionable guidance.',
    },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Former recruiter at top tech companies with 10+ years of experience helping professionals land their dream jobs.',
      initials: 'SC',
    },
    {
      name: 'Michael Torres',
      role: 'Head of Content',
      bio: 'Career coach and LinkedIn strategist who has helped thousands optimize their professional presence.',
      initials: 'MT',
    },
    {
      name: 'Emily Watson',
      role: 'Lead Developer',
      bio: 'Full-stack engineer passionate about creating tools that make career development accessible to all.',
      initials: 'EW',
    },
    {
      name: 'David Kim',
      role: 'Community Manager',
      bio: 'Networking enthusiast dedicated to building meaningful connections within our community.',
      initials: 'DK',
    },
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'ProNetwork was born from a passion to help professionals succeed.' },
    { year: '2021', title: '10K Users', description: 'Reached our first 10,000 users and launched the Resume Builder.' },
    { year: '2022', title: 'LinkedIn Guide', description: 'Launched our comprehensive LinkedIn optimization guide.' },
    { year: '2023', title: '100K Resumes', description: 'Over 100,000 resumes created using our platform.' },
    { year: '2024', title: 'Community Launch', description: 'Launched networking community features and events.' },
  ];

  const stats = [
    { value: '150K+', label: 'Users Worldwide' },
    { value: '500K+', label: 'Resumes Created' },
    { value: '95%', label: 'User Satisfaction' },
    { value: '50+', label: 'Resources & Guides' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Empowering Professionals to <span className="text-gradient">Achieve More</span>
            </h1>
            <p className="text-lg text-secondary-600 mb-8">
              ProNetwork was founded with a simple mission: to provide everyone with the tools and
              knowledge they need to build successful careers. We believe that professional development
              shouldn't be limited by resources or connections.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-secondary-600 mb-6">
                ProNetwork started in 2020 when our founder, Sarah Chen, noticed a significant gap in
                the professional development space. After years of working as a recruiter at top tech
                companies, she saw countless talented professionals struggle not because they lacked
                skills, but because they didn't know how to present themselves effectively.
              </p>
              <p className="text-secondary-600 mb-6">
                What began as a simple resume template has grown into a comprehensive platform that
                helps professionals at every stage of their career. From building standout resumes to
                optimizing LinkedIn profiles and mastering the art of networking, we provide the
                guidance that can make the difference between a missed opportunity and a dream job.
              </p>
              <p className="text-secondary-600">
                Today, we're proud to have helped over 150,000 professionals advance their careers,
                and we're just getting started. Our team continues to develop new tools and resources
                to ensure everyone has access to the knowledge and strategies they need to succeed.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Briefcase className="w-10 h-10 text-primary-600 mb-3" />
                    <h3 className="font-semibold text-secondary-900">Career Tools</h3>
                    <p className="text-sm text-secondary-600 mt-1">Professional resources at your fingertips</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Users className="w-10 h-10 text-green-600 mb-3" />
                    <h3 className="font-semibold text-secondary-900">Community</h3>
                    <p className="text-sm text-secondary-600 mt-1">Connect with like-minded professionals</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <TrendingUp className="w-10 h-10 text-purple-600 mb-3" />
                    <h3 className="font-semibold text-secondary-900">Growth</h3>
                    <p className="text-sm text-secondary-600 mt-1">Continuous learning and development</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Star className="w-10 h-10 text-yellow-500 mb-3" />
                    <h3 className="font-semibold text-secondary-900">Excellence</h3>
                    <p className="text-sm text-secondary-600 mt-1">Industry-leading guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              These core values guide everything we do at ProNetwork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">{value.title}</h3>
                <p className="text-secondary-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Key milestones in ProNetwork's growth.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <span className="text-primary-600 font-bold">{milestone.year}</span>
                      <h3 className="font-semibold text-secondary-900 mt-1">{milestone.title}</h3>
                      <p className="text-secondary-600 text-sm mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-primary-200"></div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Passionate professionals dedicated to helping you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="font-semibold text-secondary-900">{member.name}</h3>
                <p className="text-primary-600 text-sm mb-3">{member.role}</p>
                <p className="text-secondary-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers with ProNetwork.
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
              to="/contact"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
