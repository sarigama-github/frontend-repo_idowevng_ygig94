import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="absolute -z-10 inset-0 opacity-40" aria-hidden>
        <svg className="absolute left-1/2 -translate-x-1/2 blur-3xl" width="1400" height="700" viewBox="0 0 1400 700" fill="none">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
          </defs>
          <ellipse cx="700" cy="350" rx="600" ry="260" fill="url(#g1)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900"
            >
              Architecture, Energy Certificates, and Airtightness Testing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg text-slate-600"
            >
              We design efficient buildings and validate their performance with certified energy assessments and blower door testing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800">
                Get a Free Quote
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-slate-300 text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50">
                Explore Services
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5">
              <div className="w-full h-full bg-gradient-to-tr from-slate-200 via-slate-100 to-white" />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
