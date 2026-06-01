export default function Footer() {
  return (
    <footer className="py-5 px-6" style={{ background: '#374151' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Kiri — teks info */}
        <div className="flex items-center gap-3">
          <span className="font-display text-base font-bold" style={{ color: '#FBBF24' }}>PKL.</span>
          <div>
            <p className="text-xs font-medium" style={{ color: '#D1D5DB' }}>Sayyid Muhammad Prawira</p>
            <p className="text-xs" style={{ color: '#6B7280' }}>PT Alfahuma Rekaya Teknologi · 2026</p>
          </div>
        </div>

        {/* Kanan — logo only */}
<div className="flex items-center gap-4">
  <img src="/smkn.png" alt="SMKN 8 Malang" style={{ width: '36px', height: '36px', objectFit: 'contain', filter: 'grayscale(100%) brightness(100%)', opacity: 0.6 }} />
  <img src="/logo_alfahuma.png" alt="PT Alfahuma" style={{ width: '90px', height: '36px', objectFit: 'contain', filter: 'grayscale(100%) brightness(100%)', opacity: 0.6 }} />
</div>

      </div>
    </footer>
  )
}