import { motion } from "framer-motion"
import SectionHeading from "../ui/SectionHeading"
import techStack from "../../data/techStack"

function TechStack() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <SectionHeading
        title="Tech Stack"
        subtitle="Tools and technologies I work with"
      />

      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech, index) => (
          <motion.span
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium"
          >
            {tech.name}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default TechStack