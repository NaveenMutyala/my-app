export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Weather App',
    description: 'A Weather app is used to find humidty weather conditions by searching a place in it',
    tags: ['React', 'CSS', 'HTML'],
    imageUrl: '/images/image1.png',
    projectUrl: 'https://naveen-m-weatherapp.netlify.app/',
    githubUrl: 'https://github.com/NaveenMutyala/ReactJS/tree/main/weatherapp/weather-app',
    featured: true,
  },
  {
    id: '2',
    title: 'Crypto APP',
    description: 'Full-featured crypto details app',
    tags: ['React', 'Node.js','Bootstrap',],
    imageUrl: '/images/project2.jpg',
    githubUrl: 'https://github.com/NaveenMutyala/ReactJS/tree/main/cryptoapp',
    featured: true,
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects.',
    tags: ['React', 'Material UI'],
    imageUrl: '/images/image3.png',
    githubUrl: 'https://github.com/NaveenMutyala/TaskApp',
    projectUrl: 'https://task-app-naveenmutyala.netlify.app/',
    featured: true,
  },
  // Add more projects as needed
];