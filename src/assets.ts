/**
 * Central asset paths for site photos.
 * Images are in public/assets/ (root and subfolders). Paths are relative to site root.
 * If a file doesn't exist, placeholder is shown.
 */
const BASE = '/assets';

// Actual image filenames in public/assets/ (root level)
const IMG = {
  _01: '1660556974140.jpg',
  _02: '20200808_163810.jpg',
  _03: '2021-07-28-12-00-04-550.jpg',
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
    aboutSankalpam: `${BASE}/${IMG._04}`,
    programsServices: `${BASE}/${IMG._05}`,
    gallery: [
      `${BASE}/${IMG._06}`,
      `${BASE}/${IMG._07}`,
      `${BASE}/${IMG._08}`,
      `${BASE}/${IMG._09}`,
      `${BASE}/${IMG._10}`,
      `${BASE}/${IMG._11}`,
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
  /** Award/recognition photos from public/assets/awards/ with hardcoded descriptions */
  awards: [
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.10%20PM%20(1).jpeg', description: 'Tamil Nadu Govt Human Rights Commission – State Award (2021)' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.10%20PM%20(2).jpeg', description: 'Top 100 Doctors in India (2024)' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.10%20PM%20(3).jpeg', description: 'Excellence in Mental Health Advocacy' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.10%20PM.jpeg', description: 'Ethical Counselling Practices Recognition' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.11%20PM%20(1).JPG', description: 'Community Wellbeing Initiative Award' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.11%20PM%20(2).JPG', description: 'Psychological First Aid & Rural Outreach' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.11%20PM.jpeg', description: 'Human Rights Sensitive Counselling Award' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.12%20PM%20(1).jpeg', description: 'Trauma-Informed Care Excellence' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.12%20PM%20(2).jpeg', description: 'Mental Health Awareness & Prevention' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.12%20PM%20(3).jpeg', description: 'Clinical Excellence & Leadership' },
    { image: '/assets/awards/WhatsApp%20Image%202026-03-06%20at%201.00.12%20PM.jpeg', description: 'SANKALPAM – Accessible & Compassionate Care' },
  ],
} as const;
