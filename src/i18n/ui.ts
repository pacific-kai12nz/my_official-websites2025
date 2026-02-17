export const languages = {
  ja: "JP",
  en: "EN",
};

export const defaultLang = "ja";

// Biography translations
const biographyJa = {
  title: "BIOGRAPHY",
  name: "KAI NAKAMURA",
  photo_by: "photo by Hara Souta",
  profile: [
    "1996年12月12日、大阪府東大阪市出身",
    "2013年 高校の時にニュージーランドへ留学",
    "2016年 Airline Projectを設立。来年で創設10年目を迎える。",
    "2018年 ニュージーランド縦断達成",
    "2019年 資金2万円でヒッチハイク中国大陸縦断達成",
    "2020年 京都外国語大学 外国語学部 中国語学科 卒業",
    "2020年 ANA関西空港株式会社 入社",
    "2021年 Seed Teach School online 卒業",
    "2022年 日本だけではなく海外への活動を広げる為に東京へ上京。",
    "2022年 アルバイトからデザイナーと動画クリエイターとして実務経験を積む。",
    "2024年 UI/UXデザイナーの実務経験を積む。エンジニアは修行中。",
    "2025年 クリエイターとして独立",
    "2025年 2月25日 自分の経験や世界中のクリエイターと繋がりたいと思い、ZERO CREATIONというコミュニティを立ち上げた",
    "2025年 4月20日 フリーランス集団Wondastonというチームを立ち上げた。",
    "2025年 YouTube・TikTokその他SNS開設。",
  ],
};

const biographyEn = {
  title: "BIOGRAPHY",
  name: "KAI NAKAMURA",
  photo_by: "photo by Hara Souta",
  profile: [
    "Born on December 12, 1996, in Higashi-Osaka, Osaka, Japan.",
    "Studied abroad in New Zealand during high school in 2013.",
    "Founded Airline Project in 2016, which will celebrate its 10th anniversary next year.",
    "Completed a cross-country journey across New Zealand in 2018.",
    "Completed a hitchhiking journey across mainland China in 2019 with only 20,000 yen in hand.",
    "Graduated from Kyoto University of Foreign Studies, Faculty of Foreign Languages, Department of Chinese, in 2020.",
    "Joined ANA Kansai Airport Co., Ltd. in 2020.",
    "Graduated from Seed Teach School online in 2021.",
    "Moved to Tokyo in 2022 to expand activities not only in Japan but also overseas.",
    "Gained practical experience as a designer and video creator starting from part-time work in 2022.",
    "Accumulated practical experience as a UI/UX designer in 2024, while continuing to train as an engineer.",
    "Became independent in 2025 as a creator.",
    "On February 25, 2025, launched a community called ZERO CREATION to share experiences and connect with creators around the world.",
    "On April 20, 2025, founded a freelance team called Wondaston.",
    "Started YouTube, TikTok, and other social media platforms in 2025.",
  ],
};

// Portfolio translations
const portfolioJa = {
  title: "PORTFOLIO",
  categories: {
    uiux: "UI/UXデザイン",
    graphic: "グラフィックデザイン",
    video: "動画制作",
    comingsoon: "Coming Soon",
    sns: "SNS",
  },
  view_all: "View All",
  sns_buttons: {
    photography: "Photography",
    illustration: "Illustration",
  },
};

const portfolioEn = {
  title: "PORTFOLIO",
  categories: {
    uiux: "UI/UX Design",
    graphic: "Graphic Design",
    video: "Video Creation",
    comingsoon: "Coming Soon",
    sns: "SNS",
  },
  view_all: "View All",
  sns_buttons: {
    photography: "Photography",
    illustration: "Illustration",
  },
};

// Contact translations
const contactJa = {
  title: "CONTACT",
  button_text: "Contact Form",
};

const contactEn = {
  title: "CONTACT",
  button_text: "Contact Form",
};

// Menu translations
const menuJa = {
  title: "MENU",
};

const menuEn = {
  title: "MENU",
};

// Topics translations
const topicsJa = {
  title: "TOPICS",
  news_title: "Another Sky in New Zealand",
  news_date: "2024.01.15",
  description:
    "Experience the breathtaking landscapes of New Zealand through our latest video series.",
  watch_video: "Watch the full video",
  watch_button: "Watch Now",
  youtube_channel: "Subscribe to our YouTube channel",
  channel_button: "Subscribe",
};

const topicsEn = {
  title: "TOPICS",
  news_title: "Another Sky in New Zealand",
  news_date: "2024.01.15",
  description:
    "Experience the breathtaking landscapes of New Zealand through our latest video series.",
  watch_video: "Watch the full video",
  watch_button: "Watch Now",
  youtube_channel: "Subscribe to our YouTube channel",
  channel_button: "Subscribe",
};

// Topics2 translations
const topics2Ja = {
  title: "TOPICS 2",
  news_title: "Important Announcement",
  news_date: "2024.01.20",
  description:
    "Stay updated with our latest announcements and important information.",
  instagram_text: "Follow us on Instagram",
  instagram_button: "Follow",
};

const topics2En = {
  title: "TOPICS 2",
  news_title: "Important Announcement",
  news_date: "2024.01.20",
  description:
    "Stay updated with our latest announcements and important information.",
  instagram_text: "Follow us on Instagram",
  instagram_button: "Follow",
};

export const ui = {
  ja: {
    "site.title": "KAI NAKAMURA 公式サイト",
    "site.pick_up": "Pick Up Topics",
    ...biographyJa,
    ...portfolioJa,
    ...contactJa,
    ...menuJa,
    ...topicsJa,
    ...topics2Ja,
  },
  en: {
    "site.title": "KAI NAKAMURA Official Site",
    "site.pick_up": "Pick Up Topics",
    ...biographyEn,
    ...portfolioEn,
    ...contactEn,
    ...menuEn,
    ...topicsEn,
    ...topics2En,
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
