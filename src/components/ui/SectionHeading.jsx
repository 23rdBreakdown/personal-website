function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-500">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading