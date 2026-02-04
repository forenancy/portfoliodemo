import { useState } from 'react';
import {
  Users, MessageSquare, Calendar, Coffee, Globe, Lightbulb,
  Target, BookOpen, Star, TrendingUp, Award, Zap, Heart,
  ArrowRight, CheckCircle, Quote, Mail
} from 'lucide-react';

const Networking = () => {
  const [activeCategory, setActiveCategory] = useState('fundamentals');

  const categories = [
    { id: 'fundamentals', name: 'Fundamentals', icon: BookOpen },
    { id: 'online', name: 'Online Networking', icon: Globe },
    { id: 'inperson', name: 'In-Person Events', icon: Coffee },
    { id: 'followup', name: 'Follow-Up', icon: Mail },
    { id: 'maintenance', name: 'Relationship Building', icon: Heart },
  ];

  const content = {
    fundamentals: {
      title: 'Networking Fundamentals',
      description: 'Master the core principles of effective professional networking.',
      tips: [
        {
          title: 'Lead with Value',
          content: 'Always think about what you can offer others before asking for something. Share knowledge, make introductions, offer help.',
          icon: Lightbulb,
        },
        {
          title: 'Be Authentic',
          content: 'Genuine connections are built on authenticity. Be yourself, share your real interests, and show sincere curiosity about others.',
          icon: Heart,
        },
        {
          title: 'Quality Over Quantity',
          content: 'Focus on building meaningful relationships with fewer people rather than collecting contacts you\'ll never engage with.',
          icon: Star,
        },
        {
          title: 'Set Clear Goals',
          content: 'Know what you want to achieve from networking - career change, industry insights, mentorship, or business opportunities.',
          icon: Target,
        },
        {
          title: 'Be Consistent',
          content: 'Networking is a long-term game. Dedicate time weekly to nurture your professional relationships.',
          icon: Calendar,
        },
        {
          title: 'Listen More Than You Speak',
          content: 'The best networkers are great listeners. Ask thoughtful questions and show genuine interest in others\' stories.',
          icon: MessageSquare,
        },
      ],
      keyStats: [
        { stat: '85%', description: 'of jobs are filled through networking' },
        { stat: '70%', description: 'of people have found jobs through connections' },
        { stat: '3x', description: 'more likely to get hired with a referral' },
      ],
    },
    online: {
      title: 'Online Networking Strategies',
      description: 'Build your professional network in the digital space.',
      platforms: [
        {
          name: 'LinkedIn',
          tips: [
            'Engage with content daily - comment thoughtfully on posts',
            'Share valuable insights and industry content regularly',
            'Join and participate in relevant LinkedIn groups',
            'Use LinkedIn Events to find virtual networking opportunities',
            'Send personalized connection requests with context',
          ],
        },
        {
          name: 'Twitter/X',
          tips: [
            'Follow industry leaders and engage with their content',
            'Participate in Twitter chats related to your field',
            'Share your expertise through threads and insights',
            'Use relevant hashtags to increase visibility',
            'DM thoughtfully after building rapport publicly',
          ],
        },
        {
          name: 'Industry Communities',
          tips: [
            'Join Slack communities in your industry',
            'Participate in Discord servers for professionals',
            'Engage in Reddit communities related to your field',
            'Contribute to open-source projects on GitHub',
            'Answer questions on Stack Overflow or Quora',
          ],
        },
      ],
      bestPractices: [
        'Maintain a consistent online presence across platforms',
        'Respond to messages and comments within 24 hours',
        'Share your knowledge generously without expecting returns',
        'Be professional but show personality',
        'Cross-promote your content strategically',
      ],
    },
    inperson: {
      title: 'In-Person Networking',
      description: 'Make the most of conferences, meetups, and professional events.',
      beforeEvent: [
        'Research attendees and speakers beforehand',
        'Prepare your elevator pitch (30 seconds about yourself)',
        'Set specific goals (e.g., "Connect with 5 new people")',
        'Bring business cards or have a digital card ready',
        'Dress appropriately for the event and industry',
        'Prepare thoughtful questions to ask',
      ],
      duringEvent: [
        'Arrive early to avoid crowds and meet organizers',
        'Start conversations with open-ended questions',
        'Focus on the other person, not yourself',
        'Take notes about people you meet (discreetly)',
        'Exchange contact information before leaving conversations',
        'Don\'t monopolize anyone\'s time - keep conversations to 5-10 minutes',
      ],
      conversationStarters: [
        '"What brought you to this event?"',
        '"What\'s the most interesting project you\'re working on right now?"',
        '"How did you get into your field?"',
        '"What trends are you excited about in our industry?"',
        '"I saw your recent work on [specific topic] - I\'d love to hear more about it."',
      ],
      afterEvent: [
        'Connect on LinkedIn within 24 hours',
        'Send personalized follow-up messages',
        'Share any resources or introductions you promised',
        'Add notes to your CRM or contact system',
        'Schedule coffee chats with promising connections',
      ],
    },
    followup: {
      title: 'The Art of Follow-Up',
      description: 'Turn brief encounters into lasting professional relationships.',
      principles: [
        {
          title: '24-Hour Rule',
          content: 'Follow up within 24 hours while the interaction is fresh in both minds.',
        },
        {
          title: 'Be Specific',
          content: 'Reference something specific from your conversation to show you were listening.',
        },
        {
          title: 'Provide Value',
          content: 'Include something useful - an article, introduction, or resource you discussed.',
        },
        {
          title: 'Clear Next Step',
          content: 'Suggest a specific next action - a coffee chat, call, or future meeting.',
        },
      ],
      templates: [
        {
          scenario: 'After a Conference',
          template: `Hi [Name],

It was great meeting you at [Event Name] yesterday! I really enjoyed our conversation about [specific topic].

As promised, here's the link to [article/resource] we discussed. I think you'll find the section on [specific part] particularly relevant to what you're working on.

I'd love to continue our conversation over coffee sometime. Would you have 20 minutes next week?

Best,
[Your name]`,
        },
        {
          scenario: 'After an Informational Interview',
          template: `Hi [Name],

Thank you so much for taking the time to speak with me today. Your insights on [specific topic] were incredibly valuable, especially your advice about [specific advice].

I'm going to take your suggestion and [action you'll take]. I'll keep you posted on how it goes!

If there's ever anything I can do to help you, please don't hesitate to reach out.

Best regards,
[Your name]`,
        },
        {
          scenario: 'Reconnecting with an Old Contact',
          template: `Hi [Name],

I hope this message finds you well! I was thinking about our conversation at [previous event/context] and wanted to reconnect.

I saw your recent [achievement/post/news] - congratulations! It's inspiring to see your continued success in [field].

I'd love to catch up and hear what you've been working on. Would you be open to a quick call sometime this month?

Warm regards,
[Your name]`,
        },
      ],
    },
    maintenance: {
      title: 'Building Long-Term Relationships',
      description: 'Nurture your network for sustained professional growth.',
      strategies: [
        {
          title: 'Regular Check-ins',
          description: 'Schedule quarterly touchpoints with key contacts',
          actions: [
            'Set calendar reminders for check-ins',
            'Send congratulations on achievements',
            'Share relevant articles or opportunities',
            'Invite to events or webinars',
          ],
        },
        {
          title: 'Be a Connector',
          description: 'Introduce people in your network who could benefit from knowing each other',
          actions: [
            'Make strategic introductions',
            'Explain why you\'re connecting them',
            'Follow up to ensure they connected',
            'Don\'t expect anything in return',
          ],
        },
        {
          title: 'Celebrate Others',
          description: 'Acknowledge and celebrate your connections\' achievements',
          actions: [
            'Comment on job changes and promotions',
            'Share their content and wins',
            'Send congratulations notes',
            'Write LinkedIn recommendations',
          ],
        },
        {
          title: 'Be Helpful',
          description: 'Look for ways to add value without being asked',
          actions: [
            'Share job opportunities they might like',
            'Offer introductions proactively',
            'Provide feedback when asked',
            'Be a sounding board for ideas',
          ],
        },
      ],
      'networkingCRM': {
        title: 'Managing Your Network',
        description: 'Keep track of your professional relationships systematically.',
        tips: [
          'Use a spreadsheet or CRM tool to track contacts',
          'Note where you met, topics discussed, and interests',
          'Set reminders for follow-ups and check-ins',
          'Categorize contacts by relationship strength',
          'Track favors given and received',
        ],
        tools: ['Notion', 'Airtable', 'Clay', 'Dex', 'Monica CRM', 'Spreadsheet'],
      },
    },
  };

  const currentContent = content[activeCategory];

  const quotes = [
    {
      text: "Your network is your net worth.",
      author: "Porter Gale",
    },
    {
      text: "Networking is not about just connecting people. It's about connecting people with people, people with ideas, and people with opportunities.",
      author: "Michele Jennae",
    },
    {
      text: "The richest people in the world look for and build networks, everyone else looks for work.",
      author: "Robert Kiyosaki",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Professional Networking Guide
          </div>
          <h1 className="section-title">Master the Art of Networking</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Build meaningful professional relationships that accelerate your career growth and open doors to new opportunities.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white">85%</div>
              <div className="text-primary-100">of jobs filled through networking</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">70%</div>
              <div className="text-primary-100">found jobs through connections</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">3x</div>
              <div className="text-primary-100">more likely to get hired with referral</div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-secondary-600 hover:bg-secondary-100 shadow'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">{currentContent.title}</h2>
          <p className="text-secondary-600 mb-8">{currentContent.description}</p>

          {/* Fundamentals Content */}
          {activeCategory === 'fundamentals' && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentContent.tips.map((tip, index) => (
                  <div key={index} className="bg-secondary-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <tip.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-secondary-900 mb-2">{tip.title}</h3>
                    <p className="text-secondary-600 text-sm">{tip.content}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Online Networking Content */}
          {activeCategory === 'online' && (
            <>
              <div className="space-y-6 mb-8">
                {currentContent.platforms.map((platform, index) => (
                  <div key={index} className="bg-secondary-50 rounded-xl p-6">
                    <h3 className="font-semibold text-secondary-900 mb-4 text-lg">{platform.name}</h3>
                    <ul className="space-y-3">
                      {platform.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-semibold text-primary-900 mb-4">Best Practices</h3>
                <ul className="space-y-2">
                  {currentContent.bestPractices.map((practice, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-800">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* In-Person Content */}
          {activeCategory === 'inperson' && (
            <>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-secondary-50 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                    Before the Event
                  </h3>
                  <ul className="space-y-2">
                    {currentContent.beforeEvent.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary-50 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 mb-4 flex items-center">
                    <Coffee className="w-5 h-5 mr-2 text-primary-600" />
                    During the Event
                  </h3>
                  <ul className="space-y-2">
                    {currentContent.duringEvent.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-yellow-900 mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Conversation Starters
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {currentContent.conversationStarters.map((starter, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-secondary-700 italic border-l-4 border-yellow-400">
                      {starter}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  After the Event
                </h3>
                <ul className="space-y-2">
                  {currentContent.afterEvent.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-green-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Follow-Up Content */}
          {activeCategory === 'followup' && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {currentContent.principles.map((principle, index) => (
                  <div key={index} className="bg-secondary-50 rounded-xl p-5 text-center">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">{principle.title}</h4>
                    <p className="text-secondary-600 text-sm">{principle.content}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-secondary-900 mb-4 text-lg">Follow-Up Templates</h3>
              <div className="space-y-4">
                {currentContent.templates.map((template, index) => (
                  <div key={index} className="border border-secondary-200 rounded-xl overflow-hidden">
                    <div className="bg-secondary-100 px-4 py-3">
                      <h4 className="font-semibold text-secondary-900">{template.scenario}</h4>
                    </div>
                    <div className="p-4 bg-secondary-50">
                      <pre className="text-secondary-700 text-sm whitespace-pre-wrap font-sans">
                        {template.template}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Maintenance Content */}
          {activeCategory === 'maintenance' && (
            <>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {currentContent.strategies.map((strategy, index) => (
                  <div key={index} className="bg-secondary-50 rounded-xl p-6">
                    <h3 className="font-semibold text-secondary-900 mb-2">{strategy.title}</h3>
                    <p className="text-secondary-600 text-sm mb-4">{strategy.description}</p>
                    <ul className="space-y-2">
                      {strategy.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start space-x-3">
                          <ArrowRight className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                          <span className="text-secondary-700 text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-semibold text-primary-900 mb-2">{currentContent['networkingCRM'].title}</h3>
                <p className="text-primary-700 text-sm mb-4">{currentContent['networkingCRM'].description}</p>
                <ul className="space-y-2 mb-4">
                  {currentContent['networkingCRM'].tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-800 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {currentContent['networkingCRM'].tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-200 text-primary-800 text-sm rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Quotes Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-secondary-900 text-center mb-8">Networking Wisdom</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <Quote className="w-8 h-8 text-primary-300 mb-4" />
                <p className="text-secondary-700 italic mb-4">"{quote.text}"</p>
                <p className="text-primary-600 font-semibold">- {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networking;
