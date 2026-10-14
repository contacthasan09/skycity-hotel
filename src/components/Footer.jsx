import { Link } from 'react-router-dom'
import { LOGO } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative text-white mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2a32] to-[#041218]" />
      <div className="relative container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={LOGO} alt="Sky City Hotel" className="h-16 w-auto mb-5 brightness-110" />
            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              Award-winning 4-star premium hotel in Central Dhaka — modern rooms, quality dining,
              wellness and banquets, all under one roof.
            </p>
            <div className="gold-rule mt-5" />
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] mb-4 text-[#51d6f3]">Explore</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/rooms" className="hover:text-white">Rooms &amp; Suites</Link></li>
              <li><Link to="/dining" className="hover:text-white">Dining</Link></li>
              <li><Link to="/wellness" className="hover:text-white">Wellness &amp; Spa</Link></li>
              <li><Link to="/meetings" className="hover:text-white">Meetings &amp; Events</Link></li>
              <li><Link to="/offers" className="hover:text-white">Offers</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/location" className="hover:text-white">Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] mb-4 text-[#51d6f3]">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>47 Siddheswari Circular Rd,<br />Dhaka 1217, Bangladesh</li>
              <li><a href="tel:+8801313368388" className="hover:text-white">+880 1313-368388</a></li>
              <li><a href="mailto:hello@skycityhotelbd.com" className="hover:text-white">hello@skycityhotelbd.com</a></li>
              <li><a href="mailto:sales@skycityhotelbd.com" className="hover:text-white">sales@skycityhotelbd.com</a></li>
            </ul>
            <Link to="/contact" className="btn-book inline-block mt-5">Contact Us</Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Sky City Hotel Dhaka. All rights reserved.</p>
          <p>Motijheel · Dilkusha · Ramna · Malibagh</p>
        </div>
      </div>
    </footer>
  )
}