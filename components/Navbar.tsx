'use client'
import { useState, useEffect } from 'react'

const sections = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'biodata', label: 'Biodata' },
  { id: 'profil-iduka', label: 'Profil Iduka' },
  { id: 'latar-belakang', label: 'Latar Belakang' },
  { id: 'kompetensi', label: 'Kompetensi' },
  { id: 'dokumentasi', label: 'Dokumentasi' },
  { id: 'kesimpulan', label: 'Kesimpulan' },
]

export default function Navbar() {
  const [active, setActive] = useState('beranda')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const current = sections.find(s => {
        const el = document.getElementById(s.id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid #FDE68A' : 'none' }}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        <button onClick={() => scrollTo('beranda')} className="font-display text-lg font-bold" style={{ color: scrolled ? '#F97316' : '#ffffff' }}>
          PKL<span style={{ color: '#FBBF24' }}>.</span>
        </button>

        {/* Desktop nav — progress dots */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)} className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-all duration-200 group" style={{ background: active === s.id ? 'rgba(249,115,22,0.1)' : 'transparent' }}>
              <span className="w-1.5 h-1.5 rounded-full transition-all duration-200" style={{ background: active === s.id ? '#F97316' : scrolled ? '#D1D5DB' : 'rgba(255,255,255,0.5)' }} />
              <span className="text-[9px] tracking-wide uppercase transition-colors duration-200" style={{ color: active === s.id ? '#F97316' : scrolled ? '#9CA3AF' : 'rgba(255,255,255,0.6)', fontWeight: active === s.id ? 600 : 400 }}>
                {s.label}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-5 h-px transition-all duration-200" style={{ background: scrolled ? '#F97316' : '#ffffff', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span className="block w-5 h-px transition-all duration-200" style={{ background: scrolled ? '#F97316' : '#ffffff', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-200" style={{ background: scrolled ? '#F97316' : '#ffffff', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4" style={{ background: 'rgba(255,255,255,0.98)', borderBottom: '1px solid #FDE68A' }}>
          <div className="grid grid-cols-2 gap-2">
            {sections.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-left transition-all" style={{ background: active === s.id ? '#FFF7ED' : '#F9FAFB', border: active === s.id ? '1px solid #FDBA74' : '1px solid #F3F4F6' }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: active === s.id ? '#F97316' : '#D1D5DB' }} />
                <span className="text-xs font-medium" style={{ color: active === s.id ? '#F97316' : '#6B7280' }}>{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
