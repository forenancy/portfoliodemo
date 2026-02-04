import { useState } from 'react';
import {
  Linkedin, CheckCircle, ArrowRight, Camera, FileText, Users,
  MessageSquare, Search, Bell, Settings, Sparkles, Target,
  TrendingUp, Award, Eye, ThumbsUp, Share2, Bookmark
} from 'lucide-react';

const LinkedInGuide = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStepComplete = (stepId) => {
    setCompletedSteps(prev =>
      prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const steps = [
    {
      id: 1,
      title: 'Profile Photo & Banner',
      icon: Camera,
      description: 'First impressions matter. Your profile photo and banner set the tone.',
      content: {
        overview: 'Your profile photo is the first thing people see. Profiles with photos get 21x more views and 9x more connection requests.',
        tips: [
          'Use a high-quality, professional headshot with good lighting',
          'Smile naturally - it makes you approachable',
          'Dress appropriately for your industry',
          'Choose a simple, non-distracting background',
          'Make sure your face takes up 60% of the frame',
          'Update your photo every 1-2 years',
        ],
        bannerTips: [
          'Create a custom banner that reflects your personal brand',
          'Include your tagline, areas of expertise, or company branding',
          'Use colors that complement your profile photo',
          'Recommended size: 1584 x 396 pixels',
        ],
        doNot: [
          'Use group photos or photos with others cropped out',
          'Use selfies or vacation photos',
          'Use heavily filtered or edited images',
          'Leave the default gray background',
        ],
      },
    },
    {
      id: 2,
      title: 'Compelling Headline',
      icon: Sparkles,
      description: 'Your headline appears everywhere - make it count with keywords and value.',
      content: {
        overview: 'Your headline is 220 characters of prime real estate. It appears in search results, connection requests, and every comment you make.',
        tips: [
          'Go beyond just your job title',
          'Include keywords recruiters search for',
          'Highlight your unique value proposition',
          'Use the formula: Role | Specialty | Value you bring',
          'Include industry-specific terms for SEO',
        ],
        examples: [
          'Senior Software Engineer | Building Scalable Cloud Solutions | AWS Certified | Open Source Contributor',
          'Marketing Director | Driving 10x Growth Through Data-Driven Strategies | B2B SaaS Specialist',
          'Product Manager | Transforming User Needs into Innovative Products | Ex-Google, Ex-Amazon',
          'UX Designer | Creating Human-Centered Digital Experiences | Design Systems Expert',
        ],
        doNot: [
          'Just put your job title',
          'Use buzzwords without context',
          'Say "Seeking opportunities" or "Open to work" only',
          'Be vague or generic',
        ],
      },
    },
    {
      id: 3,
      title: 'About Section',
      icon: FileText,
      description: 'Tell your story and showcase your professional journey.',
      content: {
        overview: 'The About section is your chance to tell your story. Only the first 3 lines show before "see more" - make them count!',
        structure: [
          'Hook: Start with a compelling statement or question',
          'Background: Share your professional journey',
          'Expertise: Highlight your key skills and achievements',
          'Value: Explain how you help others',
          'Call to Action: Tell people how to reach you',
        ],
        tips: [
          'Write in first person for authenticity',
          'Use short paragraphs and bullet points',
          'Include relevant keywords naturally',
          'Share specific achievements with numbers',
          'Show personality while staying professional',
          'End with a clear call to action',
        ],
        template: `Are you looking for [solution you provide]?

With [X years] of experience in [field], I help [target audience] achieve [specific results].

My journey started [brief background]. Today, I specialize in:
- [Skill/Achievement 1]
- [Skill/Achievement 2]
- [Skill/Achievement 3]

What drives me: [Your motivation/passion]

Let's connect! Reach out at [email] or send me a message here on LinkedIn.`,
      },
    },
    {
      id: 4,
      title: 'Experience Section',
      icon: Target,
      description: 'Showcase your achievements, not just job duties.',
      content: {
        overview: 'Your experience section should read like a highlight reel of achievements, not a job description.',
        tips: [
          'Lead with impact, not responsibilities',
          'Use action verbs: Led, Increased, Developed, Launched',
          'Include quantifiable results whenever possible',
          'Add rich media: presentations, articles, links',
          'Keep descriptions concise but impactful',
          'Update regularly with new achievements',
        ],
        formula: 'Action Verb + Task + Result = Powerful bullet point',
        examples: [
          'Led cross-functional team of 12 to launch new product, generating $2M in first-quarter revenue',
          'Increased organic traffic by 150% through SEO optimization and content strategy overhaul',
          'Developed automated testing framework that reduced QA time by 40% and improved code coverage to 95%',
          'Managed $5M marketing budget, achieving 3x ROI through data-driven campaign optimization',
        ],
        doNot: [
          'Copy paste from your job description',
          'Use passive language',
          'Leave sections without media or links',
          'Forget to add skills for each role',
        ],
      },
    },
    {
      id: 5,
      title: 'Skills & Endorsements',
      icon: Award,
      description: 'Optimize your skills for search visibility and credibility.',
      content: {
        overview: 'Skills are crucial for LinkedIn\'s search algorithm. Members with 5+ skills get 17x more profile views.',
        tips: [
          'Add up to 50 skills (you can have more, but 50 show)',
          'Prioritize your top 3 skills - these show on your profile',
          'Include both hard and soft skills',
          'Use exact terms recruiters search for',
          'Take LinkedIn skill assessments to add badges',
          'Regularly reorder skills based on career goals',
        ],
        categories: [
          {
            name: 'Industry Skills',
            examples: ['Data Analysis', 'Cloud Computing', 'Digital Marketing', 'Financial Modeling'],
          },
          {
            name: 'Tools & Technologies',
            examples: ['Python', 'Salesforce', 'Adobe Creative Suite', 'Microsoft Excel'],
          },
          {
            name: 'Soft Skills',
            examples: ['Leadership', 'Communication', 'Problem Solving', 'Team Management'],
          },
        ],
        proTip: 'Ask colleagues to endorse your top skills. More endorsements = higher search ranking.',
      },
    },
    {
      id: 6,
      title: 'Building Connections',
      icon: Users,
      description: 'Grow your network strategically with meaningful connections.',
      content: {
        overview: 'Quality beats quantity, but you need at least 500 connections to be taken seriously by recruiters.',
        strategies: [
          'Connect with colleagues (past and present)',
          'Add classmates and alumni from your school',
          'Follow and connect with industry leaders',
          'Connect after meeting people at events',
          'Join relevant industry groups',
          'Engage with content before connecting',
        ],
        connectionMessage: `Hi [Name],

I came across your profile and was impressed by [specific thing about them]. I'm also in [industry/field] and would love to connect and learn from your experience.

Looking forward to being part of your network!

Best,
[Your name]`,
        doNot: [
          'Send blank connection requests to strangers',
          'Spam people with sales pitches',
          'Connect with everyone without a strategy',
          'Ignore connection requests',
        ],
        growthTips: [
          'Aim for 5-10 new connections per week',
          'Personalize every connection request',
          'Follow up with new connections',
          'Maintain relationships, don\'t just collect them',
        ],
      },
    },
    {
      id: 7,
      title: 'Content Strategy',
      icon: Share2,
      description: 'Become a thought leader through consistent, valuable content.',
      content: {
        overview: 'Posting content increases your visibility exponentially. The LinkedIn algorithm favors consistent creators.',
        contentTypes: [
          {
            type: 'Text Posts',
            tips: 'Share insights, lessons learned, industry observations. Hook in first line, use line breaks.',
          },
          {
            type: 'Document Posts',
            tips: 'Create carousel-style PDFs with tips or guides. These get high engagement.',
          },
          {
            type: 'Articles',
            tips: 'Long-form content for deep dives. Great for SEO and establishing expertise.',
          },
          {
            type: 'Polls',
            tips: 'Quick engagement boosters. Ask relevant industry questions.',
          },
          {
            type: 'Video',
            tips: 'Native video performs well. Keep it under 3 minutes, add captions.',
          },
        ],
        schedule: [
          'Post at least 2-3 times per week',
          'Best times: Tuesday-Thursday, 8-10 AM',
          'Comment on others\' posts daily',
          'Respond to all comments on your posts within 1 hour',
        ],
        contentIdeas: [
          'Share a lesson from a recent project',
          'Comment on industry news or trends',
          'Celebrate team or personal achievements',
          'Share useful tips or how-to guides',
          'Tell stories from your career journey',
        ],
      },
    },
    {
      id: 8,
      title: 'Engagement & Visibility',
      icon: Eye,
      description: 'Maximize your reach through strategic engagement.',
      content: {
        overview: 'The LinkedIn algorithm rewards engagement. The more you engage, the more visible your profile becomes.',
        tips: [
          'Spend 15-30 minutes daily engaging with content',
          'Leave thoughtful comments (not just "Great post!")',
          'Share posts with your own insights added',
          'Join and participate in LinkedIn groups',
          'Use relevant hashtags (3-5 per post)',
          'Tag relevant people and companies',
        ],
        commentFormula: 'Agree/Disagree + Why + Add Value = Great Comment',
        examples: [
          '"This resonates with my experience. When I implemented this strategy, I saw [result]. One thing I\'d add is [insight]."',
          '"Interesting perspective! I\'ve found that [alternative view] can also work well because [reason]. What are your thoughts?"',
        ],
        hashtags: [
          'Follow hashtags in your industry',
          'Create a list of 10-15 relevant hashtags',
          'Use a mix of popular and niche hashtags',
          'Track which hashtags perform best',
        ],
      },
    },
    {
      id: 9,
      title: 'Job Search Features',
      icon: Search,
      description: 'Leverage LinkedIn\'s powerful job search tools.',
      content: {
        overview: 'LinkedIn is the #1 platform for job searching. Over 50 million companies use it to hire.',
        features: [
          {
            name: 'Open to Work',
            description: 'Activate this privately (recruiters only) or publicly with the green banner.',
          },
          {
            name: 'Job Alerts',
            description: 'Set up alerts for specific titles, companies, and locations.',
          },
          {
            name: 'Easy Apply',
            description: 'Apply quickly with your LinkedIn profile. Keep your profile complete!',
          },
          {
            name: 'Salary Insights',
            description: 'Research compensation ranges before applying or negotiating.',
          },
        ],
        tips: [
          'Use the "I\'m Interested" button on company pages',
          'Research interviewers before meetings',
          'Follow target companies for updates',
          'Set up job alerts for dream roles',
          'Reach out to current employees for referrals',
        ],
        outreachTemplate: `Hi [Name],

I hope this message finds you well! I noticed you work at [Company] as a [Role], and I'm very interested in the [Position] opening.

I have [X years] of experience in [relevant field] and believe my skills in [specific skills] would be valuable to your team.

Would you have 15 minutes for a quick chat about your experience at [Company]? I'd love to learn more about the culture and any advice you might have.

Thank you for your time!

Best regards,
[Your name]`,
      },
    },
    {
      id: 10,
      title: 'Profile Optimization',
      icon: Settings,
      description: 'Fine-tune settings and maximize your profile\'s potential.',
      content: {
        overview: 'The final touches that separate a good profile from a great one.',
        checklist: [
          'Customize your public profile URL (linkedin.com/in/yourname)',
          'Enable "Open Profile" for Premium members to message you',
          'Add your profile in multiple languages if relevant',
          'List volunteer experience and causes you care about',
          'Add publications, patents, or certifications',
          'Request recommendations from colleagues',
          'Feature your best content at the top of your profile',
        ],
        recommendations: {
          howToAsk: 'When asking for recommendations, be specific about what you\'d like them to highlight.',
          template: `Hi [Name],

I hope you're doing well! I'm updating my LinkedIn profile and would be honored if you could write a brief recommendation based on our work together at [Company].

If possible, it would be great if you could mention [specific project or skill]. Of course, I'm happy to return the favor!

Thank you so much,
[Your name]`,
        },
        finalTips: [
          'Review your profile from a recruiter\'s perspective',
          'Use LinkedIn\'s profile strength meter as a guide',
          'Update your profile every quarter',
          'Check how you appear in search results',
        ],
      },
    },
  ];

  const currentStep = steps.find(s => s.id === activeStep);
  const progress = (completedSteps.length / steps.length) * 100;

  return (
    <div className="min-h-screen bg-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Linkedin className="w-4 h-4 mr-2" />
            Complete LinkedIn Profile Guide
          </div>
          <h1 className="section-title">Master Your LinkedIn Profile</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Follow this comprehensive step-by-step guide to create a LinkedIn profile that attracts recruiters, clients, and opportunities.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-secondary-700">Your Progress</span>
            <span className="text-sm font-medium text-primary-600">{completedSteps.length} of {steps.length} completed</span>
          </div>
          <div className="w-full bg-secondary-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Steps Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
              <h2 className="text-lg font-semibold text-secondary-900 mb-4 px-2">Steps</h2>
              <div className="space-y-1">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeStep === step.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-secondary-600 hover:bg-secondary-100'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      completedSteps.includes(step.id)
                        ? 'bg-green-500 text-white'
                        : activeStep === step.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-secondary-200 text-secondary-600'
                    }`}>
                      {completedSteps.includes(step.id) ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <span className="text-sm font-medium">{step.id}</span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-left">{step.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Step Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                    <currentStep.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <span className="text-sm text-primary-600 font-medium">Step {currentStep.id}</span>
                    <h2 className="text-2xl font-bold text-secondary-900">{currentStep.title}</h2>
                  </div>
                </div>
                <button
                  onClick={() => toggleStepComplete(currentStep.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    completedSteps.includes(currentStep.id)
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                  }`}
                >
                  {completedSteps.includes(currentStep.id) ? 'Completed' : 'Mark Complete'}
                </button>
              </div>

              <p className="text-secondary-600 mb-6">{currentStep.description}</p>

              {/* Overview */}
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <p className="text-primary-800">{currentStep.content.overview}</p>
              </div>

              {/* Tips Section */}
              {currentStep.content.tips && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Key Tips</h3>
                  <ul className="space-y-2">
                    {currentStep.content.tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Examples */}
              {currentStep.content.examples && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Examples</h3>
                  <div className="space-y-2">
                    {currentStep.content.examples.map((example, index) => (
                      <div key={index} className="bg-secondary-50 rounded-lg p-4 border-l-4 border-primary-500">
                        <p className="text-secondary-700 italic">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Template */}
              {currentStep.content.template && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Template</h3>
                  <div className="bg-secondary-900 rounded-lg p-4">
                    <pre className="text-secondary-100 text-sm whitespace-pre-wrap font-mono">
                      {currentStep.content.template}
                    </pre>
                  </div>
                </div>
              )}

              {/* Connection Message */}
              {currentStep.content.connectionMessage && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Connection Message Template</h3>
                  <div className="bg-secondary-900 rounded-lg p-4">
                    <pre className="text-secondary-100 text-sm whitespace-pre-wrap font-mono">
                      {currentStep.content.connectionMessage}
                    </pre>
                  </div>
                </div>
              )}

              {/* Content Types */}
              {currentStep.content.contentTypes && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Content Types</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {currentStep.content.contentTypes.map((content, index) => (
                      <div key={index} className="bg-secondary-50 rounded-lg p-4">
                        <h4 className="font-semibold text-secondary-900 mb-2">{content.type}</h4>
                        <p className="text-sm text-secondary-600">{content.tips}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {currentStep.content.features && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Key Features</h3>
                  <div className="space-y-3">
                    {currentStep.content.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-secondary-50 rounded-lg p-4">
                        <Search className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-secondary-900">{feature.name}</h4>
                          <p className="text-sm text-secondary-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What NOT to do */}
              {currentStep.content.doNot && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-red-600 mb-3">What NOT to Do</h3>
                  <ul className="space-y-2">
                    {currentStep.content.doNot.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-500 text-xs font-bold">X</span>
                        </span>
                        <span className="text-secondary-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-secondary-200">
                <button
                  onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                  disabled={activeStep === 1}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium ${
                    activeStep === 1
                      ? 'text-secondary-400 cursor-not-allowed'
                      : 'text-secondary-600 hover:bg-secondary-100'
                  }`}
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                  disabled={activeStep === steps.length}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium ${
                    activeStep === steps.length
                      ? 'text-secondary-400 cursor-not-allowed'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInGuide;
