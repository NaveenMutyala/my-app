import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import ExperienceTimeline from './components/ExperieceTimeline';
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ExperienceTimeline />
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          {/* Add services or skills overview here */}
        </div>
      </section>
    </>
  );
}