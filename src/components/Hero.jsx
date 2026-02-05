import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Linkedin, Users, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Your Career Success Starts Here
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6">
              Build Your{' '}
              <span className="text-gradient">Professional</span>{' '}
              Network & Career
            </h1>

            <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-xl mx-auto lg:mx-0">
              In today's competitive job market, it's essential to update your resume and LinkedIn profile to stay competitive. Master the art of professional networking with our comprehensive tools and unlock career opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/resume" className="btn-primary inline-flex items-center justify-center">
                Build Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/linkedin-guide" className="btn-secondary inline-flex items-center justify-center">
                LinkedIn Guide
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-secondary-200">
              <div>
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-sm text-secondary-500">Resumes Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-secondary-500">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-secondary-500">Career Resources</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="relative">
            <div className="grid gap-4">
              <div className="card flex items-start space-x-4 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Resume Builder</h3>
                  <p className="text-secondary-600 text-sm">
                    Create professional, ATS-friendly resumes with our easy-to-use builder and templates.
                  </p>
                </div>
              </div>

              <div className="card flex items-start space-x-4 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">LinkedIn Optimization</h3>
                  <p className="text-secondary-600 text-sm">
                    Step-by-step guides to optimize your LinkedIn profile and increase visibility.
                  </p>
                </div>
              </div>

              <div className="card flex items-start space-x-4 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Networking Strategies</h3>
                  <p className="text-secondary-600 text-sm">
                    Learn proven techniques to build meaningful professional connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
