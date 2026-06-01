'use client'
import { useEffect, useRef, useState } from 'react'
import Footer from './Footer'

const skills = [
  { label: 'PA & QA', level: 60, desc: 'Sudah cukup paham proses Project Assistance dan Quality Assurance.' },
  { label: 'Database', level: 65, desc: 'Mengerti penambahan API, tipe data di Java, dan pengelolaan data.' },
  { label: 'Bug Fixing', level: 50, desc: 'Mampu identifikasi dan fixing bug secara sistematis.' },
  { label: 'Java', level: 40, desc: 'Memahami dasar pemrograman Java dan integrasi dengan Maven.' },
]

const tools = [
  { name: 'Navicat', desc: 'Database management' },
  { name: 'Balsamiq', desc: 'UI wireframing' },
  { name: 'Java', desc: 'Backend language' },
  { name: 'Maven', desc: 'Build automation' },
  { name: 'Docx', desc: 'Technical docs' },
]

function AnimatedBar({ level }: { level: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref} className="w-full rounded-full" style={{ height: '6px', background: '#F3F4F6' }}>
      <div
        className="rounded-full"
        style={{
          height: '6px',
          width: `${width}%`,
          background: 'linear-gradient(90deg, #F97316, #FBBF24)',
          transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  )
}

export default function KompetensiSection() {
  return (
    <section id="kompetensi" className="section-snap flex flex-col" style={{ background: '#1C1917' }}>
      <div className="flex-1 py-20 px-6 pt-24">
        <div className="max-w-5xl mx-auto">

          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-6 h-px" style={{ background: '#F97316' }} />
            <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#FBBF24' }}>Kompetensi</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3">

            <div className="md:col-span-2">
              <div className="rounded-2xl p-8 flex flex-col justify-between" style={{ background: '#F97316', borderRadius: '16px', minHeight: '200px' }}>
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Skills</span>
                <div>
                  <h2 className="font-display leading-tight mb-2" style={{ fontSize: 'clamp(1.6rem,3vw,2rem)', color: '#ffffff' }}>
                    Skill<br />
                    <span style={{ fontStyle: 'italic', color: '#FDE68A' }}>yang didapat</span>
                  </h2>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: '#D1D5DB' }} />
                    <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>PKL 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-2xl p-7" style={{ background: '#ffffff', borderRadius: '16px', minHeight: '200px' }}>
                <p className="text-xs tracking-[0.15em] uppercase font-medium mb-5" style={{ color: '#F97316' }}>Kemampuan</p>
                <div className="space-y-5">
                  {skills.map((skill) => (
                    <div key={skill.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-semibold" style={{ color: '#1C1917' }}>{skill.label}</span>
                        <span className="text-xs font-medium" style={{ color: '#F97316' }}>{skill.level}%</span>
                      </div>
                      <AnimatedBar level={skill.level} />
                      <p className="text-xs mt-1.5" style={{ color: '#9CA3AF', lineHeight: 1.5 }}>{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-2xl p-7" style={{ background: '#FBBF24', borderRadius: '16px', minHeight: '120px' }}>
                <p className="text-xs tracking-[0.15em] uppercase font-medium mb-4" style={{ color: '#92400E' }}>Teknologi yang Dipelajari</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <div key={tool.name} className="flex flex-col px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.5)' }}>
                      <span className="text-sm font-bold" style={{ color: '#92400E' }}>{tool.name}</span>
                      <span className="text-xs" style={{ color: '#B45309' }}>{tool.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="rounded-2xl p-7 flex flex-col justify-between" style={{ background: '#374151', borderRadius: '16px', minHeight: '120px' }}>
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#9CA3AF' }}>Highlight</span>
                <div>
                  <p className="font-display font-bold" style={{ fontSize: '3rem', color: '#F9FAFB', lineHeight: 1 }}>5+</p>
                  <p className="text-sm font-medium mt-1" style={{ color: '#D1D5DB' }}>Teknologi baru dikuasai</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}