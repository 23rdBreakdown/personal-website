function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="text-center py-8 text-sm text-gray-400 border-t border-gray-100">
      © {year} Farrel Syawal Ardiansyah. Built with React, Tailwind CSS, and Framer Motion.
    </footer>
  )
}

export default Footer