import { Building2, Wind, FileCheck2, Gauge, Ruler, Sun } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Architecture & Design',
    desc: 'From concept to construction, we deliver thoughtful, buildable designs with an emphasis on performance.',
    points: ['Residential & commercial', 'Planning permission', 'Detailing & tender'],
  },
  {
    icon: FileCheck2,
    title: 'Energy Certificates (EPC)',
    desc: 'Certified energy performance assessments to meet local regulations and optimise running costs.',
    points: ['On-site survey', 'SAP/PHPP models', 'Regulation compliance'],
  },
  {
    icon: Wind,
    title: 'Blower Door Testing',
    desc: 'Precision airtightness testing to identify leaks and ensure your building performs as designed.',
    points: ['Pressurisation tests', 'Leak detection', 'Remedial guidance'],
  },
]

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">Comprehensive expertise from design to verification — all under one roof.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, points }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all bg-white">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-slate-900 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-600">
                {points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
