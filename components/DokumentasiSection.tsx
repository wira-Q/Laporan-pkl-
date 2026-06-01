'use client'
import { useState } from 'react'
import Footer from './Footer'

interface CarouselProps {
  images: { src: string; label: string }[]
  height?: string
}

function Carousel({ images, height = '220px' }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="relative overflow-hidden" style={{ borderRadius: '12px', height }}>
      {/* Gambar */}
      <div style={{ width: '100%', height: '100%', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {images[current].src ? (
          <img src={images[current].src} alt={images[current].label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p className="text-xs font-semibold" style={{ color: '#D97706' }}>{images[current].label}</p>
            <p className="text-xs mt-1" style={{ color: '#D9770660' }}>Taruh foto di sini</p>
          </div>
        )}

        {/* Overlay gradient */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)', pointerEvents: 'none' }} />

        {/* Label */}
        <div style={{ position: 'absolute', bottom: '10px', left: '12px' }}>
          <p className="text-xs font-medium text-white">{images[current].label}</p>
        </div>

        {/* Counter */}
        <div style={{ position: 'absolute', bottom: '10px', right: '12px' }}>
          <p className="text-xs text-white opacity-70">{current + 1} / {images.length}</p>
        </div>
      </div>

      {/* Tombol prev/next */}
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity hover:opacity-100 opacity-70" style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity hover:opacity-100 opacity-70" style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicator */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 flex gap-1">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '16px' : '6px', height: '6px', borderRadius: '3px', background: i === current ? '#F97316' : 'rgba(255,255,255,0.5)', transition: 'all 0.2s', border: 'none', cursor: 'pointer', padding: 0 }} />
          ))}
        </div>
      )}
    </div>
  )
}

// ===== DATA FOTO =====
// Ganti src dengan path foto asli, contoh: src: '/dokumentasi/tempat1.jpg'
const docSections = [
  {
    label: 'Random Foto',
    icon: '',
    col: 'md:col-span-3',
    bg: '#FEF3C7',
    color: '#D97706',
    single: false, 
    images: [
      { src: 'random1.png', label: 'Bukber' },
      { src: 'random 2.png', label: 'Badminton' },
      
    ],
  },
  {
    label: 'Tempat Kerja',
    icon: '🏢',
    col: 'md:col-span-3',
    bg: '#DCFCE7B3',
    color: '#15803D',
    single: false,
    images: [
      { src: 'tempat1.jpg', label: 'Halaman Depan' },
      { src: 'tempat2.jpg', label: 'Tempat Kerja' },
    ],
  },
  {
    label: 'zoomi',
    icon: '📊',
    col: 'md:col-span-2',
    bg: '#DBEAFE',
    color: '#1D4ED8',
    single: false,
    images: [
      { src: 'meet1.png', label: 'Meet1' },
      { src: 'meet2.png', label: 'Meet2' },
    ],
  },
  {
    label: 'Coding Backend',
    icon: '💻',
    col: 'md:col-span-2',
    bg: '#F3E8FF',
    color: '#7C3AED',
    single: false,
    images: [
      { src: 'code1.png', label: 'Coding Session 1' },
      { src: 'code2.png', label: 'Coding Session 2' },
      { src: 'code3.png', label: 'Coding Session 3' },
    ],
  },
  {
    label: 'dokumen',
    icon: '📘',
    col: 'md:col-span-2',
    bg: '#FFE4E6',
    color: '#BE123C',
    single: false,
    images: [
      { src: 'Mom.png', label: 'MoM' },
      { src: 'manualbook.png', label: 'Manual Book' },
      { src: 'testing.png', label: 'Testing' },
    ],
  },
]

export default function DokumentasiSection() {
  return (
    <section id="dokumentasi" className="section-snap flex flex-col" style={{ background: '#FFFBF5' }}>
      <div className="flex-1 py-20 px-6 pt-24">
        <div className="max-w-5xl mx-auto">

          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-6 h-px" style={{ background: '#FDBA74' }} />
            <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#F97316' }}>Dokumentasi</span>
          </div>

          {/* Header */}
          <div className="rounded-2xl p-6 flex items-center justify-between mb-3" style={{ background: '#F97316', borderRadius: '16px' }}>
            <div>
              <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>Foto & Dokumentasi PKL</h2>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>Sertifikat · Kegiatan · Lapangan</p>
            </div>
            <span className="text-4xl">📁</span>
          </div>

          {/* Grid foto */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
            {docSections.map((section, i) => (
              <div key={i} className={section.col}>
                <div className="rounded-2xl overflow-hidden" style={{ borderRadius: '16px', border: `1px solid ${section.color}20` }}>

                  {/* Header section */}
                  <div className="flex items-center gap-2 px-4 py-3" style={{ background: section.bg }}>
                    <span className="text-base">{section.icon}</span>
                    <span className="text-xs font-semibold" style={{ color: section.color }}>{section.label}</span>
                    {!section.single && (
                      <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: `${section.color}20`, color: section.color }}>
                        {section.images.length} foto
                      </span>
                    )}
                  </div>

                  {/* Carousel atau single */}
                  <Carousel images={section.images} height="180px" />

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </section>
  )
}