import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LOGO, NAV, AWARDS } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 799) setOpen(false) }
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className={`relative z-50 bg-white transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="border-b border-gray-100">
        <div className="container-max flex items-center justify-between py-3 gap-4 flex-wrap awards-bar">
          <Link to="/" className="flex items-center gap-2">
            <img src={LOGO} alt="Sky City Hotel" className="h-14 md:h-16 w-auto object-contain" />
          </Link>

          <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
            {AWARDS.map((a) => (
              <span
                key={a.name}
                className={`text-[10px] font-semibold tracking-wide px-2.5 py-1 ${a.dark ? 'text-black' : 'text-white'}`}
                style={{ background: a.bg }}
              >
                {a.name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <select className="border border-gray-300 text-xs px-2 py-1.5 bg-white" defaultValue="EN" aria-label="Language">
              <option value="EN">EN</option>
              <option value="BN">BN</option>
            </select>
            <Link to="/contact" className="btn-book">Book Now</Link>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white">
        <div className="container-max flex items-center justify-between">
          <nav className="nav-desktop hidden md:flex items-center flex-wrap">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  item.home
                    ? `nav-link nav-link-home${isActive ? ' active' : ''}`
                    : `nav-link${isActive ? ' active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="mobile-toggle hidden items-center justify-center w-11 h-11 border border-gray-300 md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00586b" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="flex flex-col border-t border-gray-100 md:hidden bg-white py-2">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `nav-link block${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}