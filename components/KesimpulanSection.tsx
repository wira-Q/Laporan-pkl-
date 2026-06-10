import Footer from './Footer'

export default function KesimpulanSection() {
  return (
    <section id="kesimpulan" className="section-snap flex flex-col" style={{ background: '#1C1917' }}>
      <div className="flex-1 py-20 px-6 pt-24">
        <div className="max-w-5xl mx-auto">

          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-6 h-px" style={{ background: '#F97316' }} />
            <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#FBBF24' }}>Penutup</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {/* Header */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="rounded-2xl p-7 flex flex-col justify-between" style={{ background: '#F97316', borderRadius: '16px', minHeight: '160px' }}>
                  <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Closing</span>
                  <h2 className="font-display leading-tight" style={{ fontSize: 'clamp(1.6rem,3vw,2rem)', color: '#ffffff' }}>
                    Kesan,<br />pesan<br />
                    <span style={{ fontStyle: 'italic', color: '#FDE68A' }}>& saran</span>
                  </h2>
                </div>
                <div className="md:col-span-2 rounded-2xl p-7" style={{ background: '#ffffff', border: '1px solid #FDE68A', borderRadius: '16px', minHeight: '160px' }}>
                  <p className="text-xs tracking-[0.15em] uppercase font-medium mb-3" style={{ color: '#F97316' }}>Kesimpulan</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280', lineHeight: 1.7 }}>
                    Selama 6 bulan PKL di PT Alfahuma Rekaya Teknologi, banyak ilmu dan pengalaman berharga diperoleh. PKL ini berhasil meningkatkan kompetensi teknis seperti backend,pembuaatan dokumen dan untuk non-teknis seperti cara berkomunikasi dengan tim sebagai bekal memasuki dunia kerja.
                  </p>
                </div>
              </div>
            </div>

            {/* Kesan */}
            <div className="rounded-2xl p-7" style={{ background: '#FBBF24', borderRadius: '16px', minHeight: '160px' }}>
              <p className="text-xs tracking-[0.15em] uppercase font-medium mb-3" style={{ color: '#92400E' }}>Kesan</p>
              <p className="text-sm leading-relaxed" style={{ color: '#78350F', lineHeight: 1.7 }}>
                PKL di PT Alfahuma memberikan kesan sangat positif. Lingkungan kerja profesional namun nyaman membuat proses belajar menjadi menyenangkan dan menambahkan banyak  kompetensi baru yang berguna contoh nya seperti backend development, pembuatan dokumen dan komunikasi.
              </p>
            </div>

            {/* Pesan */}
            <div className="rounded-2xl p-7" style={{ border: '1px solid rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.05)', borderRadius: '16px', minHeight: '160px' }}>
              <p className="text-xs tracking-[0.15em] uppercase font-medium mb-3" style={{ color: '#FBBF24' }}>Pesan</p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                Bagi adik-adik yang akan PKL, manfaatkan setiap kesempatan untuk belajar. Jangan takut bertanya karena pengalaman kerja tidak bisa didapat hanya dari bangku sekolah.
              </p>
            </div>

            {/* Saran Iduka */}
            <div className="rounded-2xl p-7" style={{ border: '1px solid rgba(249,115,22,0.2)', background: 'rgba(249,115,22,0.05)', borderRadius: '16px', minHeight: '160px' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#F97316' }} />
                <p className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#FBBF24' }}>Saran untuk Iduka</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                Diharapkan PT Alfahuma terus membuka kesempatan bagi siswa PKL untuk terlibat lebih dalam di berbagai proyek serta meningkatkan program mentoring.
              </p>
            </div>

            {/* Saran Sekolah */}
            <div className="rounded-2xl p-7" style={{ background: '#374151', borderRadius: '16px', minHeight: '160px' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#9CA3AF' }} />
                <p className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#9CA3AF' }}>Saran untuk Sekolah</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB', lineHeight: 1.7 }}>
                Diharapkan sekolah dapat lebih mempersiapkan siswa sebelum PKL, terutama dalam hal pemahaman dunia kerja, keterampilan dasar, serta kesiapan mental. Dengan persiapan yang baik, siswa diharapkan dapat lebih percaya diri dan mampu beradaptasi dengan lingkungan kerja.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
