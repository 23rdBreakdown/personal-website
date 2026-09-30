function ProjectCard({ title, role, year, description, tech, image, link }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover bg-gray-100"
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm text-gray-400">{year}</span>
        </div>

        <p className="text-sm text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
            >
              {item}
            </span>
          ))}
        </div>

        {link && (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm font-medium text-blue-600 hover:underline"
  >
    View project →
  </a>
)}
      </div>
    </div>
  )
}

export default ProjectCard