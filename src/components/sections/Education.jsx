import { motion } from "framer-motion"
import SectionHeading from "../ui/SectionHeading"
import education from "../../data/education"

function Education() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <SectionHeading
        title="Education"
        subtitle="My academic background"
      />

      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-2 border-blue-600 pl-6 py-2"
          >
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-lg font-bold">{item.school}</h3>
              {item.current && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                  Ongoing
                </span>
              )}
            </div>
            <p className="text-gray-600">{item.degree}</p>
            <p className="text-sm text-gray-400">{item.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education