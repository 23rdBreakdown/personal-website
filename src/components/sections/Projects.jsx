import { motion } from "framer-motion"
import SectionHeading from "../ui/SectionHeading"
import ProjectCard from "../ui/ProjectCard"
import projects from "../../data/projects"

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading
        title="Featured Projects"
        subtitle="Things I've built with my team and on my own"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects