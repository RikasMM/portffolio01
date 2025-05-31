
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Interactive E-commerce Platform',
    description: 'A full-featured online store with dynamic product filtering, secure user authentication, and a streamlined checkout process.',
    techStack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
    imageUrl: 'https://picsum.photos/seed/ecomApp/400/250',
    githubUrl: 'https://github.com/yourusername/e-commerce-app',
    liveUrl: '#', // Replace with actual live URL or remove if not applicable
    category: 'Web Development',
  },
  {
    id: 'project-2',
    title: 'AI-Powered Task Manager',
    description: 'A collaborative tool using AI to suggest task priorities and estimate completion times, enhancing team productivity.',
    techStack: ['Vue.js', 'Vuex', 'Firebase', 'Vuetify', 'Google AI Platform'],
    imageUrl: 'https://picsum.photos/seed/aiTaskApp/400/250',
    githubUrl: 'https://github.com/yourusername/ai-task-manager',
    category: 'Web Application',
  },
  {
    id: 'project-3',
    title: 'This Portfolio Website',
    description: 'A responsive and modern personal portfolio built from scratch to showcase my skills, projects, and journey as a developer.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageUrl: 'https://picsum.photos/seed/devPortfolio/400/250',
    liveUrl: '#', // This site itself
    githubUrl: 'https://github.com/yourusername/portfolio-react-tailwind',
    category: 'Personal Project',
  },
   {
    id: 'project-4',
    title: 'Real-time Chat Application',
    description: 'A scalable chat application with end-to-end encryption, group chats, and multimedia sharing features.',
    techStack: ['React Native', 'Socket.IO', 'Node.js', 'AWS Amplify'],
    imageUrl: 'https://picsum.photos/seed/chatAppRealtime/400/250',
    githubUrl: 'https://github.com/yourusername/realtime-chat',
    liveUrl: '#',
    category: 'Mobile App',
  },
  {
    id: 'project-5',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, featuring customizable charts and real-time data updates.',
    techStack: ['D3.js', 'React', 'Python (Flask)', 'Pandas'],
    imageUrl: 'https://picsum.photos/seed/dataVizDash/400/250',
    githubUrl: 'https://github.com/yourusername/data-viz-dashboard',
    category: 'Data Science',
  },
  {
    id: 'project-6',
    title: 'Fitness Tracking App',
    description: 'A mobile-first application for tracking workouts, setting fitness goals, and monitoring progress with social sharing features.',
    techStack: ['Flutter', 'Firebase', 'Google Fit API'],
    imageUrl: 'https://picsum.photos/seed/fitnessAppTrack/400/250',
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
    category: 'Mobile App',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" className="bg-slate-50">
      <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
        Here's a selection of projects that demonstrate my passion for building innovative solutions and my proficiency across various technologies.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
