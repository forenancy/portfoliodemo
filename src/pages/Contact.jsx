import { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, MessageSquare,
  Clock, CheckCircle, Linkedin, Twitter, Github
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'student_assistant@computingtalentinitiative.org',
      description: 'We typically respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Organization',
      content: 'Computing Talent Initiative',
      description: 'Empowering the next generation of tech talent',
    },
  ];

  const faqs = [
    {
      question: 'Is the Resume Builder free to use?',
      answer: 'Yes! Our basic Resume Builder is completely free. You can create, edit, and download professional resumes without any cost.',
    },
    {
      question: 'How long does it take to create a resume?',
      answer: 'Most users complete their resume in 15-30 minutes using our builder. With pre-filled templates, it can be even faster!',
    },
    {
      question: 'Can I access the LinkedIn Guide offline?',
      answer: 'Currently, our guides are available online only. However, you can bookmark pages for easy access anytime.',
    },
    {
      question: 'Do you offer personalized career coaching?',
      answer: 'We\'re working on launching personalized coaching services. Sign up for our newsletter to be notified when it\'s available!',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com' },
    { icon: Github, name: 'GitHub', url: 'https://github.com' },
  ];

  return (
    <div className="min-h-screen bg-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Our team is here to help you
            succeed in your professional journey.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-semibold text-secondary-900 mb-1">{info.title}</h3>
              <p className="text-primary-600 font-medium">{info.content}</p>
              <p className="text-secondary-500 text-sm mt-1">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-secondary-900">Send us a Message</h2>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Message Sent!</h3>
                <p className="text-secondary-600">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="resume">Resume Builder Help</option>
                    <option value="linkedin">LinkedIn Guide Questions</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}

            {/* Response Time Notice */}
            <div className="mt-6 flex items-center justify-center space-x-2 text-secondary-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>Average response time: 24 hours</span>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold text-secondary-900 mb-2">{faq.question}</h3>
                  <p className="text-secondary-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-secondary-900 mb-4">Connect With Us</h3>
              <p className="text-secondary-600 text-sm mb-4">
                Follow us on social media for career tips, industry insights, and updates.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 hover:bg-primary-600 hover:text-white transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-primary-100 text-sm mb-4">
                Subscribe to our newsletter for weekly career tips and resources.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
