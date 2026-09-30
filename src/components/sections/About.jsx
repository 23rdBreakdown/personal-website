import { motion } from "framer-motion"
import SectionHeading from "../ui/SectionHeading"

function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <SectionHeading
        title="About Me"
        subtitle="A quick introduction"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-lg text-gray-600 leading-relaxed"
      >
        I'm a Computer Science student at BINUS University, currently focused on
        Artificial Intelligence. I enjoy turning ideas into working software, from
        frontend interfaces to backend systems, and I'm especially interested in how
        AI can make everyday tools smarter. I'm looking for opportunities to keep
        learning through real projects and internships.
      </motion.p>
    </section>
  )
}

export default About