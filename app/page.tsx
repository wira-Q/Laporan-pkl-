import BerandaSection from '@/components/BerandaSection'
import BiodataSection from '@/components/BiodataSection'
import ProfilIduka from '@/components/ProfilIduka'
import LatarBelakangSection from '@/components/LatarBelakangSection'
import KompetensiSection from '@/components/KompetensiSection'
import DokumentasiSection from '@/components/DokumentasiSection'
import KesimpulanSection from '@/components/KesimpulanSection'

export default function Home() {
  return (
    <main>
      <BerandaSection />
      <BiodataSection />
      <ProfilIduka />
      <LatarBelakangSection />
      <KompetensiSection />
      <DokumentasiSection />
      <KesimpulanSection />
    </main>
  )
}
