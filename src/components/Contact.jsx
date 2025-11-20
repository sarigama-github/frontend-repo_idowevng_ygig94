import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      service: form.get('service'),
      message: form.get('message') || undefined,
      source: 'website'
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Failed to send')
      const data = await res.json()
      setStatus({ type: 'success', message: 'Thanks! We\'ll get back to you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Request a Quote</h2>
            <p className="mt-3 text-slate-600">Tell us about your project and the services you7re interested in. We7ll reply within one business day.</p>
            <div className="mt-6 rounded-2xl border border-slate-200 p-6">
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between"><dt className="text-slate-600">Email</dt><dd className="font-medium text-slate-900">studio@example.com</dd></div>
                <div className="flex justify-between"><dt className="text-slate-600">Phone</dt><dd className="font-medium text-slate-900">+1 (555) 012-3456</dd></div>
                <div className="flex justify-between"><dt className="text-slate-600">Office</dt><dd className="font-medium text-slate-900">123 Energy Way, Suite 200</dd></div>
              </dl>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Service</label>
                <select name="service" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900">
                  <option value="architecture">Architecture & Design</option>
                  <option value="energy_certificate">Energy Certificate (EPC)</option>
                  <option value="blower_door">Blower Door Testing</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800">Send Request</button>
            {status && (
              <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
