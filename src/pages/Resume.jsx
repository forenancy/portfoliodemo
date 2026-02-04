import { useState } from 'react';
import {
  FileText, Download, Eye, Plus, Trash2, Save,
  User, Briefcase, GraduationCap, Award, Code, Mail, Phone, MapPin, Globe
} from 'lucide-react';

const Resume = () => {
  const [activeTemplate, setActiveTemplate] = useState('modern');
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      website: 'johndoe.com',
      linkedin: 'linkedin.com/in/johndoe',
      summary: 'Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about creating scalable solutions and leading technical teams.',
    },
    experience: [
      {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        location: 'San Francisco, CA',
        startDate: '2021',
        endDate: 'Present',
        description: 'Led development of microservices architecture, improving system performance by 40%. Mentored junior developers and conducted code reviews.',
      },
      {
        id: 2,
        title: 'Software Engineer',
        company: 'StartUp Inc',
        location: 'New York, NY',
        startDate: '2019',
        endDate: '2021',
        description: 'Developed and maintained RESTful APIs serving 1M+ daily requests. Implemented CI/CD pipelines reducing deployment time by 60%.',
      },
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California, Berkeley',
        year: '2019',
        gpa: '3.8',
      },
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Git'],
  });

  const templates = [
    { id: 'modern', name: 'Modern', color: 'bg-primary-600' },
    { id: 'classic', name: 'Classic', color: 'bg-secondary-700' },
    { id: 'creative', name: 'Creative', color: 'bg-purple-600' },
  ];

  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        { id: Date.now(), title: '', company: '', location: '', startDate: '', endDate: '', description: '' },
      ],
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id),
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { id: Date.now(), degree: '', school: '', year: '', gpa: '' },
      ],
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id),
    }));
  };

  const updateSkills = (value) => {
    setResumeData(prev => ({
      ...prev,
      skills: value.split(',').map(s => s.trim()).filter(s => s),
    }));
  };

  return (
    <div className="min-h-screen bg-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Resume Builder</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Create a professional, ATS-friendly resume in minutes. Choose a template, fill in your details, and download.
          </p>
        </div>

        {/* Template Selection */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">Choose Your Template</h2>
          <div className="flex flex-wrap gap-4">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setActiveTemplate(template.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg border-2 transition-all duration-200 ${
                  activeTemplate === template.id
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-secondary-200 hover:border-secondary-300'
                }`}
              >
                <div className={`w-4 h-4 rounded ${template.color}`}></div>
                <span className="font-medium">{template.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-semibold text-secondary-900">Personal Information</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={resumeData.personalInfo.fullName}
                  onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={resumeData.personalInfo.location}
                  onChange={(e) => updatePersonalInfo('location', e.target.value)}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Website"
                  value={resumeData.personalInfo.website}
                  onChange={(e) => updatePersonalInfo('website', e.target.value)}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="LinkedIn URL"
                  value={resumeData.personalInfo.linkedin}
                  onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <textarea
                placeholder="Professional Summary"
                value={resumeData.personalInfo.summary}
                onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                rows={3}
                className="w-full mt-4 px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-primary-600" />
                  <h2 className="text-lg font-semibold text-secondary-900">Experience</h2>
                </div>
                <button
                  onClick={addExperience}
                  className="flex items-center space-x-1 px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </div>
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={exp.id} className="p-4 border border-secondary-200 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-medium text-secondary-500">Experience {index + 1}</span>
                      <button
                        onClick={() => removeExperience(exp.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Job Title"
                        value={exp.title}
                        onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Start"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="End"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <textarea
                      placeholder="Description (use bullet points for achievements)"
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                      rows={2}
                      className="w-full mt-3 px-3 py-2 text-sm border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-primary-600" />
                  <h2 className="text-lg font-semibold text-secondary-900">Education</h2>
                </div>
                <button
                  onClick={addEducation}
                  className="flex items-center space-x-1 px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </div>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={edu.id} className="p-4 border border-secondary-200 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-medium text-secondary-500">Education {index + 1}</span>
                      <button
                        onClick={() => removeEducation(edu.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="School"
                        value={edu.school}
                        onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Year"
                        value={edu.year}
                        onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="GPA (optional)"
                        value={edu.gpa}
                        onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-semibold text-secondary-900">Skills</h2>
              </div>
              <input
                type="text"
                placeholder="Enter skills separated by commas (e.g., JavaScript, React, Node.js)"
                value={resumeData.skills.join(', ')}
                onChange={(e) => updateSkills(e.target.value)}
                className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {resumeData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-primary-600" />
                  <h2 className="text-lg font-semibold text-secondary-900">Preview</h2>
                </div>
                <button className="btn-primary flex items-center space-x-2 text-sm py-2">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>

              {/* Resume Preview */}
              <div className={`border border-secondary-200 rounded-lg p-6 bg-white text-sm ${
                activeTemplate === 'modern' ? 'font-sans' :
                activeTemplate === 'classic' ? 'font-serif' : 'font-sans'
              }`}>
                {/* Header */}
                <div className={`text-center pb-4 mb-4 border-b ${
                  activeTemplate === 'modern' ? 'border-primary-600' :
                  activeTemplate === 'classic' ? 'border-secondary-400' : 'border-purple-600'
                }`}>
                  <h1 className={`text-2xl font-bold ${
                    activeTemplate === 'modern' ? 'text-primary-600' :
                    activeTemplate === 'classic' ? 'text-secondary-900' : 'text-purple-600'
                  }`}>
                    {resumeData.personalInfo.fullName || 'Your Name'}
                  </h1>
                  <div className="flex flex-wrap justify-center gap-3 mt-2 text-secondary-600 text-xs">
                    {resumeData.personalInfo.email && (
                      <span className="flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {resumeData.personalInfo.email}
                      </span>
                    )}
                    {resumeData.personalInfo.phone && (
                      <span className="flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {resumeData.personalInfo.phone}
                      </span>
                    )}
                    {resumeData.personalInfo.location && (
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {resumeData.personalInfo.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Summary */}
                {resumeData.personalInfo.summary && (
                  <div className="mb-4">
                    <h2 className={`text-sm font-bold mb-2 ${
                      activeTemplate === 'modern' ? 'text-primary-600' :
                      activeTemplate === 'classic' ? 'text-secondary-900' : 'text-purple-600'
                    }`}>PROFESSIONAL SUMMARY</h2>
                    <p className="text-xs text-secondary-700">{resumeData.personalInfo.summary}</p>
                  </div>
                )}

                {/* Experience */}
                {resumeData.experience.length > 0 && resumeData.experience[0].title && (
                  <div className="mb-4">
                    <h2 className={`text-sm font-bold mb-2 ${
                      activeTemplate === 'modern' ? 'text-primary-600' :
                      activeTemplate === 'classic' ? 'text-secondary-900' : 'text-purple-600'
                    }`}>EXPERIENCE</h2>
                    {resumeData.experience.map((exp) => (
                      exp.title && (
                        <div key={exp.id} className="mb-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-secondary-900 text-xs">{exp.title}</h3>
                              <p className="text-xs text-secondary-600">{exp.company} {exp.location && `| ${exp.location}`}</p>
                            </div>
                            <span className="text-xs text-secondary-500">{exp.startDate} - {exp.endDate}</span>
                          </div>
                          <p className="text-xs text-secondary-700 mt-1">{exp.description}</p>
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Education */}
                {resumeData.education.length > 0 && resumeData.education[0].degree && (
                  <div className="mb-4">
                    <h2 className={`text-sm font-bold mb-2 ${
                      activeTemplate === 'modern' ? 'text-primary-600' :
                      activeTemplate === 'classic' ? 'text-secondary-900' : 'text-purple-600'
                    }`}>EDUCATION</h2>
                    {resumeData.education.map((edu) => (
                      edu.degree && (
                        <div key={edu.id} className="mb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-secondary-900 text-xs">{edu.degree}</h3>
                              <p className="text-xs text-secondary-600">{edu.school}</p>
                            </div>
                            <span className="text-xs text-secondary-500">{edu.year}</span>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Skills */}
                {resumeData.skills.length > 0 && (
                  <div>
                    <h2 className={`text-sm font-bold mb-2 ${
                      activeTemplate === 'modern' ? 'text-primary-600' :
                      activeTemplate === 'classic' ? 'text-secondary-900' : 'text-purple-600'
                    }`}>SKILLS</h2>
                    <div className="flex flex-wrap gap-1">
                      {resumeData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-2 py-0.5 text-xs rounded ${
                            activeTemplate === 'modern' ? 'bg-primary-100 text-primary-700' :
                            activeTemplate === 'classic' ? 'bg-secondary-100 text-secondary-700' : 'bg-purple-100 text-purple-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
