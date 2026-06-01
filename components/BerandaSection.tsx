'use client'
import { useEffect, useState } from 'react'
import Footer from './Footer'

export default function BerandaSection() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  return (
    <section id="beranda" className="section-snap flex flex-col">
      <div className="flex-1 relative flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 50%, #F97316 100%)' }}>

        {/* Dummy bg pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        {/* Foto tempat PKL sebagai background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/tempat-pkl.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

        {/* Overlay gradient bawah */}
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: 'linear-gradient(to bottom, transparent, rgba(249,115,22,0.8))' }} />

        {/* Konten hero — padding top lebih besar supaya tidak nabrak navbar */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto w-full" style={{ paddingTop: '100px', paddingBottom: '40px' }}>

          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            {/* Badge laporan pkl — posisi lebih rendah dari navbar */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#ffffff' }} />
              <span className="text-xs text-white font-medium tracking-widest uppercase">Laporan PKL 2026</span>
            </div>
          </div>

          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <h1 className="font-display text-white mb-4 leading-tight" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}>
              Sayyid Muhammad<br />
              <span style={{ fontStyle: 'italic', color: '#FDE68A' }}>Prawira</span>
            </h1>
          </div>

          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
            <p className="text-white mb-8 font-light" style={{ fontSize: 'clamp(0.9rem,2vw,1.1rem)', opacity: 0.85 }}>
              PT Alfahuma Rekaya Teknologi · Jan – Jun 2026
            </p>
          </div>

          <div className={`flex flex-wrap items-center justify-center gap-3 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
            {['Project Assistant', 'Backend Developer', 'SMK Negeri 8 Malang'].map((tag) => (
              <span key={tag} className="text-xs px-4 py-2 rounded-full font-medium" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)' }}>{tag}</span>
            ))}
          </div>

          <div className={`mt-12 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
            <button onClick={() => document.getElementById('biodata')?.scrollIntoView({ behavior: 'smooth' })} className="flex flex-col items-center gap-2 mx-auto text-white opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-xs tracking-widest uppercase">Mulai</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ animation: 'bounce 2s infinite' }}>
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute top-4 right-4 md:top-6 md:right-6 text-xs text-white opacity-30 text-right">
          
        </div>
      </div>
      <Footer />
    </section>
  )
}
