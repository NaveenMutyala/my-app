import React from 'react';
import { FaBriefcase, FaGraduationCap, FaAws } from 'react-icons/fa';
import {  SiReact, SiPython, SiJavascript } from 'react-icons/si';
import { GrTest } from 'react-icons/gr';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  duration: string;
  icon: React.ReactNode;
  points: string[];
  skills: string[];
}

const ExperienceTimeline = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Accenture",
      duration: "Jun 2024 - Present",
      icon: <SiReact className="text-blue-500" />,
      points: [
        "Fixed bugs and enhanced performance in OneChanel application using JavaScript, JSP",
        "Resolved 10+ bugs and UI issues across 50+ regions using Chrome DevTools",
        "Resolved 20+ tickets for Saudia Airlines project using Azure Monitor and Application Insights",
        "Completed comprehensive MERN stack training covering 90% of essential industry technologies"
      ],
      skills: ["React", "JavaScript", "Azure", "JSP", "MERN"]
    },
    {
      id: 2,
      title: "Software Test Engineer",
      company: "Amdocs",
      duration: "Feb 2024 - Jun 2024",
      icon: <GrTest className="text-purple-500" />,
      points: [
        "Ensured quality for 3 Mobile Telecom's MY3 app and web platform",
        "Performed black box, regression, functional, and UI testing",
        "Delivered consistent, defect-free releases through thorough testing"
      ],
      skills: ["Testing", "Quality Assurance", "Web Testing"]
    },
    {
      id: 3,
      title: "System Development Engineer Intern",
      company: "Amazon",
      duration: "Jan 2023 - Jun 2023",
      icon: <FaAws className="text-orange-500" />,
      points: [
        "Built Ticket Data Health Dashboard with AWS QuickSight, Lambda, S3, and Athena for 120+ teams",
        "Automated patching of 80+ Linux servers using Python (90% time savings)",
        "Created Resource Info Dashboard improving efficiency by 80% for 25+ teams",
        "Developed Operational Excellence Scorecard in Amazon Hackathon"
      ],
      skills: ["AWS", "Python", "Automation", "QuickSight"]
    },
    {
      id: 4,
      title: "B.Tech Computer Science",
      company: "RVR & JC College of Engineering",
      duration: "2019 - 2023",
      icon: <FaGraduationCap className="text-green-500" />,
      points: [
        "CGPA: 9.46/10",
        "Specialized in Full Stack Development",
        "Coursework in OOP, DSA, DBMS, and Computer Networks"
      ],
      skills: ["Algorithms", "Data Structures", "DBMS", "OOP"]
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-6 dark:text-white">Professional Journey</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
        
        {timelineData.map((item) => (
          <div key={item.id} className="relative pl-16 pb-8 group">
            {/* Icon */}
            <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-100 dark:border-gray-700 group-hover:border-blue-300 transition-all duration-300">
              <div className="text-xl">
                {item.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h4 className="text-lg font-semibold dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">{item.duration}</span>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 my-4 dark:text-gray-300">
                {item.points.map((point, i) => (
                  <li key={i} className="text-sm">{point}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;