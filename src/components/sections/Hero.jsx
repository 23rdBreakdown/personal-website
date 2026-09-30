import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-blue-600 font-medium mb-3"
      >
        Computer Science Student — AI Enthusiast
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        Farrel Syawal Ardiansyah
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 max-w-xl text-lg text-gray-500"
      >
        I build clean, user-friendly web interfaces and explore how AI can make them smarter.
      </motion.p>
    </section>
  )
}

export default Hero