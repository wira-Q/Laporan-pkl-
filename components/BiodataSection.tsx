'use client'
import Footer from './Footer'

const details = [
  { label: 'Nama Lengkap', value: 'Sayyid Muhammad Prawira' },
  { label: 'Tempat, Tgl Lahir', value: 'Malang, 25 Mei 2009' },
  { label: 'Alamat', value: 'Jl. teluk grajakan, Malang' },
  { label: 'Latar Belakang Pendidikan', value: 'MI Hasyim Asyari , SMP Negeri 14 Malang' },
  { label: 'Sekolah', value: 'SMK Negeri 8 Malang' },
  { label: 'NIS', value: '5918' },
  { label: 'Kelas / Jurusan', value: 'XI RPL B (Rekayasa Perangkat Lunak)' },
  { label: 'Tempat PKL', value: 'PT Alfahuma Rekaya Teknologi' },
  { label: 'Durasi', value: '5 Januari – 30 Juni 2026' },
]

export default function BiodataSection() {
  return (
    <section id="biodata" className="section-snap flex flex-col" style={{ background: '#FFFBF5' }}>
      <div className="flex-1 py-20 px-6 pt-24">
        <div className="max-w-5xl mx-auto">

          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-6 h-px" style={{ background: '#FDBA74' }} />
            <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#F97316' }}>Biodata Siswa</span>
          </div>

          {/* ===== BENTO GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 mb-3">

            {/* Foto */}
          <div className="md:col-span-2">
            <div 
              className="flex items-center justify-center"
              style={{ 
                height: '280px', 
                background: '#FEF3C7',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                padding: '32px',
                borderRadius: '16px',
                
              }}
            >
              <div
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '3px solid #F97316',
                  boxShadow: '0 0 0 4px rgba(249,115,22,0.2)'
                }}
              >
                <img
                  src="/foto.jpg"
                  alt="Foto Sayyid"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                />
              </div>
            </div>
          </div>

            {/* Nama + deskripsi */}
            <div className="md:col-span-4">
              <div className="rounded-2xl p-8 flex flex-col justify-between" style={{ background: '#F97316', borderRadius: '16px', minHeight: '280px' }}>
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Siswa PKL</span>
                <div>
                  <h2 className="font-display leading-[0.96] mb-3" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#ffffff' }}>
                    Sayyid <span style={{ fontStyle: 'italic', color: '#FDE68A' }}>Muhammad</span> Prawira
                  </h2>
                  {/* Deskripsi singkat */}
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                    Halo kenalin nama saya Sayyid — siswa SMK di smkn 8 malang, yang lagi PKL di PT Alfahuma. Passionate di dunia frontend, UI/UX. Masih belajar, tapi selalu penasaran sama hal-hal baru di dunia tech.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1.5 rounded-lg font-medium" style={{ background: '#FDE68A', color: '#92400E' }}>Project Assistant</span>
                    <span className="text-xs px-3 py-1.5 rounded-lg font-medium" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)' }}>Backend Developer</span>
                    <span className="text-xs px-3 py-1.5 rounded-lg font-medium" style={{ background: 'rgba(255,255,255,0.15)', color: '#FDE68A', border: '1px solid rgba(255,255,255,0.2)' }}>Frontend Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Minat cards */}
            <div className="md:col-span-2">
              <div className="rounded-2xl p-5 flex flex-col justify-between" style={{ background: '#FBBF24', borderRadius: '16px', minHeight: '90px' }}>
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#92400E' }}>Minat</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Frontend Dev', 'UI/UX', 'Web Design'].map(m => (
                    <span key={m} className="text-xs px-2 py-1 rounded-md font-medium" style={{ background: 'rgba(255,255,255,0.4)', color: '#92400E' }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="rounded-2xl p-5 flex flex-col justify-between" style={{ background: '#ffffff', border: '1px solid #FDE68A', borderRadius: '16px', minHeight: '90px' }}>
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#F97316', opacity: 0.8 }}>Sekolah</span>
                <p className="text-sm font-semibold" style={{ color: '#1C1917' }}>SMK Negeri 8 Malang</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="rounded-2xl p-5 flex flex-col justify-between" style={{ background: '#DCFCE7', borderRadius: '16px', minHeight: '90px' }}>
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#15803D' }}>Kelas</span>
                <p className="text-sm font-semibold" style={{ color: '#166534' }}>XI RPL B</p>
              </div>
            </div>

          </div>

          {/* ===== DETAIL INFO ===== */}
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #FDE68A', borderRadius: '16px' }}>
            <div className="px-6 py-4" style={{ background: '#F97316' }}>
              <p className="text-xs tracking-[0.15em] uppercase font-medium text-white">Informasi Lengkap</p>
            </div>
            <div className="divide-y" style={{ background: '#ffffff', borderColor: '#FEF3C7' }}>
              {details.map((item, i) => (
                <div key={i} className="flex gap-4 px-6 py-3.5">
                  <span className="text-xs font-medium min-w-[140px]" style={{ color: '#F97316' }}>{item.label}</span>
                  <span className="text-xs" style={{ color: '#374151' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </section>
  )
}