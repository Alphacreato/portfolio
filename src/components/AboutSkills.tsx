import profile from "../assets/profile.png";
import { motion } from "framer-motion";

const skills = [
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "REST APIs",
  "Git & GitHub",
];

const AboutSkills = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src={profile}
              alt="Dandy"
              className="w-64 h-64 object-cover rounded-2xl border border-white/10"
            />
            <div className="absolute inset-0 rounded-2xl bg-primary opacity-10 blur-xl -z-10" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-textMuted mb-8 leading-relaxed">
            I’m a frontend and mobile app developer focused on building
            responsive, user-friendly applications using modern technologies.
            I enjoy turning ideas into clean, functional products with smooth
            user experience.
          </p>

          <h3 className="text-xl font-semibold mb-4">
            Skills & Tools
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-surface border border-white/10 rounded-full text-sm text-textPrimary hover:border-primary transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSkills;
