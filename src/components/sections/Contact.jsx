import { motion } from "framer-motion"
import SectionHeading from "../ui/SectionHeading"

function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-24 text-center">
      <SectionHeading
        title="Let's Connect"
        subtitle="I'm open to internship opportunities and collaborations"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="mailto:yayaardiansyah23@gmail.com" className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/farrel-syawal-ardiansyah-902926414" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-50 transition-colors">
          LinkedIn
        </a>
      </motion.div>
    </section>
  )
}

export default Contact