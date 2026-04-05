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
  },
  hero: {
    /** Hero carousel images (16:9 or similar). Place files in public/assets/hero/. */
    breakingSilence: `${BASE}/hero/hero-breaking-silence.png`,
    accessibleSupport: `${BASE}/hero/hero-accessible-support.png`,
  },
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
