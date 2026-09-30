import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-blue-600 font-medium mb-3">
        Frontend Developer Intern Candidate
      </motion.p>

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl font-bold tracking-tight">
        Farrel Syawal Ardiansyah
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 max-w-xl text-lg text-gray-500">
        Computer Science student at BINUS University who enjoys turning designs into working, user-friendly web interfaces.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex gap-4">
        <a href="/CV_Farrel_Syawal_Ardiansyah.pdf" download className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
          Download CV
        </a>
        <a href="#projects" className="px-6 py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-50 transition-colors">
          View Projects
        </a>
      </motion.div>
    </section>
  )
}

export default Hero