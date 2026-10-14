import { useState } from 'react'

export default function BookingWidget({ variant = 'hero' }) {
  const [checkIn, setCheckIn] = useState('2026-09-20')
  const [checkOut, setCheckOut] = useState('2026-09-21')
  const [guests, setGuests] = useState('2')

  const base =
    variant === 'hero'
      ? 'bg-[#0a2a32]/90 text-white p-6 w-full max-w-sm shadow-2xl backdrop-blur-sm border border-white/10'
      : 'bg-white text-ink p-6 w-full shadow-card border border-gray-100'

  const labelCls = variant === 'hero' ? 'form-label text-white/85' : 'form-label'

  return (
    <div className={base}>
      <h3 className="font-signika text-xl mb-4 tracking-wide">Reserve Your Stay</h3>

      <label className={labelCls}>Check In</label>
      <input type="date" className="input-field mb-3" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />

      <label className={labelCls}>Check Out</label>
      <input type="date" className="input-field mb-3" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />

      <label className={labelCls}>Guests</label>
      <select className="input-field mb-5" value={guests} onChange={(e) => setGuests(e.target.value)}>
        <option value="1">1 Guest</option>
        <option value="2">2 Guests</option>
        <option value="3">3 Guests</option>
        <option value="4">4 Guests</option>
      </select>

      <button type="button" className="btn-cyan">Check Availability</button>
      <p className={`text-[11px] mt-3 tracking-wide ${variant === 'hero' ? 'text-white/60' : 'text-ink/60'}`}>
        Best rate guaranteed · Free cancellation on flexible rates
      </p>
    </div>
  )
}