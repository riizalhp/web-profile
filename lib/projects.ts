export interface ProjectLink {
  type: 'direct' | 'denied';
  url?: string;
  companyProfileUrl?: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  websiteLink?: ProjectLink;
  galleryImages?: string[];
  accessType?: number;
}

export const projectsData: ProjectDetail[] = [
  {
    id: "sales-distribution-optimization",
    title: "Sales Distribution Optimization Website and Dashboard",
    websiteLink: { type: 'denied', companyProfileUrl: 'http://pdam-kulonprogo.id/v1/?i=1' },
    accessType: 1
  },
  {
    id: "mvp-agrofaster",
    title: "Minimum Viable Product Agrofaster",
    websiteLink: { type: 'denied', companyProfileUrl: 'https://agrofaster.netlify.app/' },
    accessType: 3
  },
  {
    id: "cms-rantangin",
    title: "Content Management System Rantangin",
    websiteLink: { type: 'denied', companyProfileUrl: 'https://rantangin.com/' },
    accessType: 1
  },
  {
    id: "attendance-system",
    title: "Attendance System",
    websiteLink: { type: 'denied', companyProfileUrl: 'https://www.instagram.com/sevenincjogja' },
    accessType: 1
  },
  {
    id: "jogja-dataku-dlhk",
    title: "Jogja Dataku Dinas Lingkungan Hidup dan Kehutanan Yogyakarta",
    websiteLink: { type: 'direct', url: 'https://bapperida.jogjaprov.go.id/dataku/data_dasar/index/26-lingkungan-hidup?bidang_urusan=1' },
    accessType: 2
  },
  {
    id: "mvp-sinaou-edu",
    title: "Minimum Viable Product and Content Management System Admin Dashboard",
    websiteLink: { type: 'direct', url: 'https://fashion-ecommerce-riizalhp-portfolio.vercel.app/' },
    accessType: 2
  },
  {
    id: "ahp-dss",
    title: "Analytical Hierarchy Process Decision Support System",
    websiteLink: { type: 'direct', url: 'https://pindad.com/' },
    accessType: 2
  },
  {
    id: "dashboard-oee",
    title: "Overall Equipment Effectiveness Dashboard Real-Time",
    websiteLink: { type: 'direct', url: 'https://portal.gkd-astra.co.id/login' },
    accessType: 2
  },
  {
    id: "ayra-ai",
    title: "Offline Madical Advisor AI",
    websiteLink: { type: 'denied', companyProfileUrl: 'https://youtu.be/ag3znSncd24?si=daiyUVVrt8p9mIc4' },
    accessType: 3
  },
  {
    id: "healthy-games-quiz",
    title: "Hypertension Educational Game",
    websiteLink: { type: 'direct', url: 'https://gamematahati.com/splash' },
    accessType: 2
  },
  {
    id: "multix-company-profile",
    title: "Template Company Profile",
    websiteLink: { type: 'direct', url: 'https://demo.phpscriptpoint.com/multix/' },
    accessType: 2
  },
  {
    id: "pms-panda-resort",
    title: "Property Management System and Online Booking",
    websiteLink: { type: 'direct', url: 'https://portal-berita-v1-riizalhp-portofolio.vercel.app/homepage' },
    accessType: 2
  },
  {
    id: "pms-flex-home",
    title: "Property Agent Content Management System",
    websiteLink: { type: 'direct', url: 'https://portal-berita-v2-riizalhp-portofolio.vercel.app/' },
    accessType: 2
  },
  {
    id: "portal-berita",
    title: "Portal Berita",
    websiteLink: { type: 'direct', url: 'https://portal-berita-v1-riizalhp-portofolio.vercel.app/homepage' },
    accessType: 2
  },
  {
    id: "berita-kini",
    title: "Berita Kini",
    websiteLink: { type: 'direct', url: 'https://portal-berita-v2-riizalhp-portofolio.vercel.app/' },
    accessType: 2
  },
  {
    id: "fashion-hub",
    title: "Fashion Hub",
    websiteLink: { type: 'direct', url: 'https://fashion-ecommerce-riizalhp-portfolio.vercel.app/' },
    accessType: 2
  },
  {
    id: "magelang-advanture",
    title: "Magelang Advanture",
    websiteLink: { type: 'direct', url: 'https://magelang-advanture-riizalhp-portfolio.vercel.app/' },
    accessType: 2
  },
  {
    id: "galactic-annihilator",
    title: "Galactic Annihilator",
    websiteLink: { type: 'direct', url: 'https://airplane-shooting-game-riizalhp-por.vercel.app/' },
    accessType: 2
  },
  {
    id: "properti-agent",
    title: "Properti Agent",
    websiteLink: { type: 'direct', url: 'https://properti-management-v3-riizalhp-portofolio.vercel.app/' },
    accessType: 2
  },
  {
    id: "pemilos",
    title: "Pemilos",
    websiteLink: { type: 'direct', url: 'https://pemilihan-ketua-osis-v1-riizalhp-portofolio.vercel.app/' },
    accessType: 2
  },
  {
    id: "estate-hub",
    title: "Estate Hub",
    websiteLink: { type: 'direct', url: 'https://properti-management-v2-riizalhp-portofolio.vercel.app/' },
    accessType: 2
  },
  {
    id: "kampung-kecil",
    title: "Kampung Kecil",
    websiteLink: { type: 'direct', url: 'https://huggingface.co/spaces/riizal/analisis-sentimen-IndoBERT-fine-tuning' },
    accessType: 2
  }
];
