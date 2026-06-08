import Footer from './Footer'

export default function ProfilIduka() {
  return (
    <section id="profil-iduka" className="section-snap flex flex-col" style={{ background: '#1C1917' }}>
      <div className="flex-1 py-20 px-6 pt-24">
        <div className="max-w-5xl mx-auto">

          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-6 h-px" style={{ background: '#F97316' }} />
            <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#FBBF24' }}>Profil Iduka</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3">

            {/* Nama perusahaan */}
            <div className="md:col-span-3">
              <div className="rounded-2xl p-8 flex flex-col justify-between" style={{ background: '#F97316', borderRadius: '16px', minHeight: '200px' }}>
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Perusahaan</span>
                <div>
                  <h2 className="font-display leading-tight mb-2" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#ffffff' }}>
                    PT Alfahuma<br />
                    <span style={{ fontStyle: 'italic', color: '#FDE68A' }}>Rekayasa Teknologi</span>
                  </h2>
                  <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.7)' }}>Pengembangan Website & Aplikasi</p>
                </div>
              </div>
            </div>

            {/* Info singkat */}
            <div className="md:col-span-3">
              <div className="rounded-2xl p-7 flex flex-col justify-between" style={{ border: '1px solid rgba(249,115,22,0.3)', borderRadius: '16px', minHeight: '200px', background: 'rgba(249,115,22,0.05)' }}>
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#FBBF24' }}>Tentang</span>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                  Menyediakan solusi layanan konsultan teknologi informasi dan transformasi digital yang berfokus pada jasa pembuatan software custom, IT Managed Services, Audit IT, hingga Transformasi Digital 4.0. Berlokasi di Jakarta Selatan dan bercabang di Malang, melayani ratusan klien dari perusahaan swasta, lembaga, maupun instansi Pemerintah.
                </p>
              </div>
            </div>

            {/* Detail info */}
            {[
              { label: 'Bidang', value: 'Pengembangan Website & Aplikasi' },
              { label: 'Fokus', value: 'Software Dev, Web App, Mobile App' },
              { label: 'direktur alfahuma', value: 'Iqbal Luthfillah' },
            ].map((item, i) => (
              <div key={i} className="md:col-span-2">
                <div className="rounded-2xl p-5 flex flex-col justify-between" style={{ background: i === 0 ? '#FBBF24' : i === 1 ? 'rgba(249,115,22,0.1)' : 'rgba(255,255,255,0.05)', border: i !== 0 ? '1px solid rgba(249,115,22,0.2)' : 'none', borderRadius: '16px', minHeight: '90px' }}>
                  <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: i === 0 ? '#92400E' : '#F97316' }}>{item.label}</span>
                  <p className="text-sm font-semibold" style={{ color: i === 0 ? '#1C1917' : 'rgba(255,255,255,0.8)' }}>{item.value}</p>
                </div>
              </div>
            ))}

            {/* ===== Working Process ===== */}
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-4 h-px" style={{ background: '#F97316' }} />
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#FBBF24' }}>Working Process</span>
              </div>
              <div className="overflow-hidden" style={{ borderRadius: '16px' }}>
                <img src="/working_process.png" alt="Working Process PT Alfahuma" style={{ width: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* ===== Smart Assessment Platform ===== */}
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-4 h-px" style={{ background: '#F97316' }} />
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#FBBF24' }}>Smart Assessment Platform</span>
              </div>
              <div className="overflow-hidden" style={{ background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 50%, #F97316 100%)' }}>
                <img src="/smart_assessment.png" alt="Smart Assessment Platform" style={{ background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 50%, #F97316 100%)' }} />
              </div>
            </div>

           

            {/* Map */}
            <div className="md:col-span-6">
              <div className="relative overflow-hidden" style={{ borderRadius: '16px', height: '200px' }}>
                <iframe src="https://maps.google.com/maps?q=PT+Alfahuma+Rekaya+Teknologi&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi" />
                <div className="absolute bottom-3 left-3 right-3 p-3 flex items-center justify-between gap-3" style={{ background: 'rgba(28,25,23,0.85)', backdropFilter: 'blur(12px)', borderRadius: '10px', border: '1px solid rgba(249,115,22,0.3)' }}>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: '#FBBF24' }}>Lokasi PKL</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>PT Alfahuma Rekaya Teknologi</p>
                  </div>
                  <a href="https://maps.app.goo.gl/YJWKd1NQbSxiaoSh6" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-xs px-3 py-1.5 rounded-lg font-medium transition-opacity hover:opacity-80" style={{ background: '#F97316', color: '#ffffff' }}>Buka Maps</a>
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
