import React from 'react'
import './style.css'
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';
import { Link } from 'react-router-dom';

const Work = () => {
    const skills = [
    'React.js',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Node.js',
    'Express.js',
    'RESTful APIs',
    'MongoDB',
    'SQL',
    'Git',
    'Redux',
    'Responsive Web Design',
    'Webpack',
    'GraphQL',
    'AI/ML integration',
    'Drupal'
  ];

  const experience = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior React Developer',
      duration: 'July 2020 - Present',
      responsibilities: [
        'Developing and maintaining scalable web applications using React.js',
        'Collaborating with cross-functional teams to deliver high-quality software',
        'Implementing responsive design principles to ensure optimal user experience',
        'Integrating AI/ML features into the application for enhanced functionality'
      ]
    },
    {
      company: 'WebDev Co.',
      position: 'Frontend Developer',
      duration: 'January 2018 - June 2020',
      responsibilities: [
        'Building user interfaces for web applications using React.js',
        'Collaborating with backend developers to integrate frontend and backend functionality',
        'Troubleshooting and debugging issues to ensure smooth user experience',
        'Implementing SEO best practices to improve website visibility'
      ]
    }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Built a responsive e-commerce platform using React and Redux for state management. Integrated payment gateway for seamless transactions.',
      technologies: ['React.js', 'Redux', 'Bootstrap', 'Node.js', 'MongoDB']
    },
    {
      title: 'AI Chatbot',
      description: 'Developed an AI-powered chatbot for customer support, integrating natural language processing for efficient communication.',
      technologies: ['React.js', 'Node.js', 'AI/ML']
    }
  ];

  return (
    <div className="work-page">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="experience-item">
          <h3>{job.position} - {job.company}</h3>
          <p>{job.duration}</p>
          <ul>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(', ')}</p>
        </div>
      ))}
       <div className="third">
        <ul>
        <Link to="/"><li><HomeIcon/></li></Link>
        <Link to="/contact"><li><AccountBoxIcon/></li></Link>
        <Link to="/work"><li><WorkOutlineTwoToneIcon/></li></Link>
        <li><ContactMailIcon/></li>
        </ul>
      </div>
    </div>
  )
}

export default Work