import { useState } from 'react'
import { Menu, X, Building2, Wind, FileBadge2 } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-slate-900 font-semibold">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-900 text-white">
              <Building2 size={18} />
            </span>
            <span className="tracking-tight">Studio ThermArch</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:bg-slate-800 transition-colors">
              <FileBadge2 size={16} /> Free Quote
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:bg-slate-800">
              <Wind size={16} /> Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
