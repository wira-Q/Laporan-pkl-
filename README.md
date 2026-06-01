# PKL Website — Sayyid Muhammad P

Website laporan PKL di PT Alfahuma Rekaya Teknologi.

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS**
- **Supabase** (database)
- **Lucide React** (icons)
- **TypeScript**

## Cara Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Setup environment variables

Salin `.env.example` menjadi `.env.local`:

```bash
cp .env.example .env.local
```

Isi dengan nilai dari Supabase dashboard (Settings > API).

### 3. Jalankan dev server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Deploy ke Vercel

1. Push ke GitHub
2. Import repo di [vercel.com](https://vercel.com)
3. Tambahkan environment variables Supabase
4. Klik Deploy

## Kustomisasi

- **Sosial media**: Edit file `src/components/Footer.tsx` — ganti link href dengan akun kamu
- **Tugas PKL**: Edit array `jobs` di `src/components/JobsSection.tsx`
- **Timeline**: Edit array `timeline` di `src/components/ExperienceSection.tsx`
- **Info perusahaan**: Edit `src/components/AboutSection.tsx`
