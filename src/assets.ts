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
    founder: `${BASE}/${IMG._15}`,
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
  /** Award/recognition photos for the About page carousel. Add your own to public/assets/awards/ (e.g. award-1.jpg) and list here. */
  awards: [
    `${BASE}/${IMG._13}`,
    `${BASE}/${IMG._14}`,
    `${BASE}/${IMG._15}`,
    `${BASE}/${IMG._17}`,
    `${BASE}/${IMG._18}`,
  ],
} as const;
