function Projects() {
  const items = [
    { title: 'Passive House Extension', img: '/project-1.jpg', tag: 'Residential' },
    { title: 'Low-Energy Office', img: '/project-2.jpg', tag: 'Commercial' },
    { title: 'Retrofit Townhouse', img: '/project-3.jpg', tag: 'Retrofit' },
  ]

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Selected Projects</h2>
            <p className="mt-3 text-slate-600">A glimpse into our built work and performance-led designs.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:bg-slate-800">Start a Project</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <figure key={it.title} className="group overflow-hidden rounded-2xl bg-white border border-slate-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <figcaption className="p-4">
                <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">{it.tag}</span>
                <h3 className="mt-2 font-semibold text-slate-900">{it.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
