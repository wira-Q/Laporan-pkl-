import Footer from './Footer'

export default function LatarBelakangSection() {
  return (
    <section id="latar-belakang" className="section-snap flex flex-col" style={{ background: '#FFFBF5' }}>
      <div className="flex-1 py-20 px-6 pt-24">
        <div className="max-w-5xl mx-auto">

          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-6 h-px" style={{ background: '#FDBA74' }} />
            <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#F97316' }}>Pendahuluan</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3">

            <div className="md:col-span-2">
              <div className="rounded-2xl p-8 flex flex-col justify-between" style={{ background: '#F97316', borderRadius: '16px', minHeight: '200px' }}>
                <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Overview</span>
                <h2 className="font-display leading-tight" style={{ fontSize: 'clamp(1.6rem,3vw,2rem)', color: '#ffffff' }}>
                  Latar<br />belakang,<br />
                  <span style={{ fontStyle: 'italic', color: '#FDE68A' }}>tujuan,manfaat</span>
                </h2>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-2xl p-7" style={{ background: '#ffffff', border: '1px solid #FDE68A', borderRadius: '16px', minHeight: '200px' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-4xl font-bold" style={{ color: '#FDE68A' }}>01</span>
                  <span className="text-sm font-semibold" style={{ color: '#1C1917' }}>Latar Belakang</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280', lineHeight: 1.7 }}>
                  Praktik Kerja Lapangan (PKL) merupakan bagian penting dari kurikulum pendidikan kejuruan yang memberikan kesempatan bagi siswa untuk menerapkan ilmu ke dalam dunia kerja nyata. Kegiatan ini dilaksanakan di PT Alfahuma Rekaya Teknologi, perusahaan yang bergerak di bidang pengembangan website dan aplikasi dan saya menjadi PA dan juga programer backend..
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="rounded-2xl p-7" style={{ background: '#FBBF24', borderRadius: '16px', minHeight: '160px' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-4xl font-bold" style={{ color: 'rgba(146,64,14,0.4)' }}>02</span>
                  <span className="text-sm font-semibold" style={{ color: '#92400E' }}>Tujuan PKL</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#78350F', lineHeight: 1.7 }}>
                  Memperkenalkan siswa pada lingkungan kerja profesional, meningkatkan kompetensi di bidang teknologi informasi, serta membangun sikap profesional sebagai bekal memasuki dunia industri.
                  Selama kegiatan, saya berperan sebagai Programmer Analyst (PA) dan Backend Developer, dengan kompetensi dalam analisis sistem, pengembangan API, implementasi backend, debugging, serta kolaborasi tim menggunakan Git.
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="rounded-2xl p-7" style={{ background: '#DCFCE7', borderRadius: '16px', minHeight: '160px' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-4xl font-bold" style={{ color: 'rgba(21,128,61,0.3)' }}>03</span>
                  <span className="text-sm font-semibold" style={{ color: '#15803D' }}>Manfaat PKL</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#166534', lineHeight: 1.7 }}>
                  Pengalaman langsung bekerja dengan tim profesional, penguasaan tools industri seperti Java, Maven, Navicat, Docx, dan Balsamiq, serta kemampuan problem solving secara nyata.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
