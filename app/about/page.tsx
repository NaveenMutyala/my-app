
import Skills from "../components/Skills";
import ExperienceTimeline from "../components/ExperieceTimeline";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-4">
              Hi, I'm Naveen Kumar Mutyala, a passionate Frontend Developer with 1+ years of experience 
              building web applications. I specialize in modern JavaScript frameworks and 
              have a strong background in both frontend and backend development.
            </p>
            <p className="text-lg mb-4">
              My journey in web development started when I was in college, and I've been 
              hooked ever since. I love solving complex problems and creating efficient, 
              user-friendly applications.
            </p>
            <p className="text-lg mb-6">
              When I'm not coding, you can find me hiking, reading tech blogs, or 
              experimenting with new technologies.
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <Skills />
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}