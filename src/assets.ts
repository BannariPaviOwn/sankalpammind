/**
 * Central asset paths for site photos.
 * Images are in public/assets/ (root and subfolders). Paths are relative to site root.
 * If a file doesn't exist, placeholder is shown.
 */
const BASE = '/assets';

// Actual image filenames in public/assets/ (root level)
const IMG = {
  _01: 'f01ac310-f842-49ea-a042-9ac0416eab88.jpg',
  _02: 'WhatsApp Image 2026-03-14 at 11.44.31 PM (1).jpeg',
  _03: 'IMG_0246.JPG',
  _04: '2021-07-28-12-00-32-787.jpg',
  _05: '2021-07-28-12-01-10-919.jpg',
  _06: '20210728_141309.jpg',
  _07: '20210728_142307.jpg',
  _08: 'FB_IMG_1582858342691.jpg',
  _09: 'IMG-20200228-WA0002.jpg',
  _10: 'IMG-20200228-WA0003.jpg',
  _11: 'IMG-20200228-WA0005.jpg',
  _12: 'IMG-20200228-WA0007.jpg',
  _13: 'IMG_0246.JPG',
  _14: 'IMG_20191219_122948.jpg',
  _15: 'IMG_20191219_123012.jpg',
  _16: 'IMG_20191219_123048.jpg',
  _17: 'IMG_20191219_123346.jpg',
  _18: 'IMG_20191219_123349.jpg',
  _19: 'IMG_20191219_123403.jpg',
};

export const ASSETS = {
  home: {
    ourWork: `${BASE}/${IMG._01}`,
    community: `${BASE}/${IMG._02}`,
    programs: `${BASE}/${IMG._03}`,
    aboutSankalpam: `${BASE}/about/sahiwellness-33.jpg%20(1).jpeg`,
    programsServices: `${BASE}/${IMG._05}`,
    gallery: [
      '/assets/moments/20200808_163810.jpg',
      '/assets/moments/IMG_20191219_123048.jpg',
      '/assets/moments/IMG-20200228-WA0007.jpg',
      '/assets/moments/WhatsApp%20Image%202026-03-14%20at%2011.44.31%20PM.jpeg',
      '/assets/moments/WhatsApp%20Image%202026-03-18%20at%202.51.24%20PM.jpeg',
      '/assets/moments/WhatsApp%20Image%202026-03-18%20at%202.52.28%20PM.jpeg',
      '/assets/moments/WhatsApp%20Image%202026-03-18%20at%202.52.40%20PM.jpeg',
      '/assets/moments/WhatsApp%20Image%202026-03-18%20at%202.52.55%20PM.jpeg',
      '/assets/moments/WhatsApp%20Image%202026-03-18%20at%202.53.22%20PM.jpeg',
    ],
  },
  about: {
    ourStory: `${BASE}/${IMG._12}`,
    community: `${BASE}/${IMG._13}`,
    ruralOutreach: `${BASE}/${IMG._14}`,
    founder: `${BASE}/founder's Desk/founder.png`,
    founder2: `${BASE}/founder's Desk/founder2.png`,
  },
  initiatives: {
    programsAction: `${BASE}/${IMG._16}`,
    sessions: `${BASE}/${IMG._17}`,
    /** MANODAYA section — `public/assets/initiatives/manodaya/` */
    manodayaGallery: [
      `${BASE}/initiatives/manodaya/18217b4d-7f6d-4758-98b3-41ed025c89cf.jpeg`,
      `${BASE}/initiatives/manodaya/7b399b03-0c9c-4315-a128-d77c79fdca10.jpeg`,
      `${BASE}/initiatives/manodaya/a95e5d4b-4838-4c1b-82c8-4ac35246ad25.jpeg`,
      `${BASE}/initiatives/manodaya/cbc1f64a-6f6c-4c42-b103-8dfc9ce900d2%20(1).jpeg`,
      `${BASE}/initiatives/manodaya/cff8ae34-51b5-45a9-80ea-0c2e8863bd85.jpeg`,
      `${BASE}/initiatives/manoshiksha/205c2986-29b3-45ca-9dcf-9a45f3553eba.jpeg`,
    ] as const,
    /** MANOSHIKSHA section — `public/assets/initiatives/manoshiksha/` */
    manoshikshaGallery: [
      `${BASE}/initiatives/manoshiksha/FB_IMG_1582858342691.jpg`,
      `${BASE}/initiatives/manoshiksha/IMG_20191219_122948.jpg`,
    ] as const,
    /** MANORAKSHA — `public/assets/initiatives/manoraksha/` */
    manorakshaGallery: [
      `${BASE}/initiatives/manoraksha/45198437-77c2-408a-91ff-214f20dd8df6.jpeg`,
      `${BASE}/initiatives/manoraksha/205c2986-29b3-45ca-9dcf-9a45f3553eba%20(1).jpeg`,
    ] as const,
    /**
     * Initiatives page — `public/assets/initiatives/inititatives/`
     * Add more filenames here when you drop new files in that folder.
     */
    inititativesGallery: [`${BASE}/initiatives/inititatives/unnamed.jpg`] as const,
    gallery: [
      `${BASE}/${IMG._18}`,
      `${BASE}/${IMG._19}`,
      `${BASE}/${IMG._16}`,
    ],
  },
  getInvolved: {
    volunteers: `${BASE}/${IMG._01}`,
    training: `${BASE}/${IMG._02}`,
    partners: `${BASE}/${IMG._03}`,
    community: `${BASE}/${IMG._04}`,
    impact: `${BASE}/${IMG._05}`,
  },
  leadership: {
    building: `${BASE}/about/sahiwellness-33.jpg%20(1).jpeg`,
    /** Top hero image on Leadership & Governance page (distinct from gallery order) */
    pageHero: `${BASE}/initiatives/leadershipandhoverece/IMG_7072.jpeg`,
    /** Leadership & Governance page — `public/assets/initiatives/leadershipandhoverece/` */
    governanceGallery: [
      `${BASE}/initiatives/leadershipandhoverece/IMG_7067.jpeg`,
      `${BASE}/initiatives/leadershipandhoverece/IMG_7069.jpeg`,
      `${BASE}/initiatives/leadershipandhoverece/IMG_7070.jpeg`,
      `${BASE}/initiatives/leadershipandhoverece/IMG_7071.jpeg`,
      `${BASE}/initiatives/leadershipandhoverece/IMG_7072.jpeg`,
    ] as const,
    trusteePhotos: [
      `${BASE}/initiatives/trustee/30cd2f1c-d2ea-47b3-b732-74236bfd21a2.jpeg`,
      `${BASE}/initiatives/trustee/96e3e54d-2453-4e75-8601-3a56f7c9b36c.jpeg`,
    ] as const,
  },
  hero: {
    /** Hero carousel images (16:9 or similar). Place files in public/assets/hero/. */
    breakingSilence: `${BASE}/hero/hero-breaking-silence.png`,
    accessibleSupport: `${BASE}/hero/hero-accessible-support.png`,
  },
  /** Impact page photo strip — `public/assets/moments/` */
  impactPagePhotos: [
    `${BASE}/moments/20200808_163810.jpg`,
    `${BASE}/moments/IMG_20191219_123048.jpg`,
    `${BASE}/moments/IMG-20200228-WA0007.jpg`,
  ] as const,
  /** Award/recognition photos from public/assets/awards/ with hardcoded descriptions */
  awards: [
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.10%20PM%20(1).jpeg', description: 'Women Leadership Award (2022)' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.10%20PM%20(2).jpeg', description: 'TN State Award From Human Rights Commission (2021)' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.10%20PM%20(3).jpeg', description: 'IWM Social Worker Award' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.10%20PM.jpeg', description: 'Best Mental Health Expert Award (2021)' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.11%20PM%20(1).JPG', description: 'Best Psychologist Award (2024)' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.11%20PM%20(2).JPG', description: 'Most Trusted Doctor (2024)' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.11%20PM.jpeg', description: 'Volunteer Recogonition' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.12%20PM%20(1).jpeg', description: 'Volunteer Recogonition (2021)' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.12%20PM%20(2).jpeg', description: 'Best Mental Health Expert Award (2021)' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.12%20PM%20(3).jpeg', description: 'Influential Women Award)' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.12%20PM.jpeg', description: 'Mental Health Social Activist' },
  ],
} as const;
