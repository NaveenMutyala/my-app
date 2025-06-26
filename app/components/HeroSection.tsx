import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Naveen Kumar Mutyala</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Frontend Developer</h2>
          <p className="text-lg mb-8 max-w-lg">
            I build exceptional digital experiences with modern technologies.
            Currently specializing in React, Next.js, and Node.js.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/projects"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/images/profile.jpeg"
              alt="Naveen Mutyala"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}