import { skills } from '../data/skills';

export default function Skills() {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4 dark:text-white">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="flex items-center bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-lg"
          >
            <skill.icon className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="dark:text-gray-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}