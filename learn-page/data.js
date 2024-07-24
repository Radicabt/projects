export const NEWEST_CATEGORY = "newest";
export const POPULAR_CATEGORY = "popular";
export const TRIVIA_CATEGORY = "trivia";

const DUMMY_COMMENT_1 = {
  content: "Лорем Ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем Ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години. Кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга.",
  authorUsername: "Име и Презиме",
  publishTimestamp: "00/00/00, 00:00",
  authorPhoto: "https://i.pravatar.cc/300"
};

const DUMMY_COMMENT_2 = {
  content: "Лорем Ипсум е едноставен модел на текст кој се користел.",
  authorUsername: "Име и презиме",
  publishTimestamp: "00/00/00, 00:00",
  authorPhoto: "https://i.pravatar.cc/304"
} 
const DUMMY_COMMENT_3 = {
  content: "Лорем Ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем Ипсум бил индустриски стандард.",
  authorUsername: "Име и презиме",
  publishTimestamp: "00/00/00, 00:00",
  authorPhoto: "https://i.pravatar.cc/303"
};


export const cardData = [
  {
    id: "card-1",
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
      publishDate: "Објавено на: 28/05/24",
      imagePath: "./learn-page/assets/Rectangle 540 (1).png",
    category: NEWEST_CATEGORY,
    comments: [DUMMY_COMMENT_1, DUMMY_COMMENT_2],
  },
  {
    id: "card-2",
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
      publishDate: "Објавено на: 28/05/24",
      imagePath: "./learn-page/assets/Rectangle 540 (2).png",
    category: NEWEST_CATEGORY,
    comments: [DUMMY_COMMENT_1, DUMMY_COMMENT_3],
  },
  {
    id: "card-3",
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
      publishDate: "Објавено на: 28/05/24",
      imagePath: "./learn-page/assets/Rectangle 540 (3).png",
    category: POPULAR_CATEGORY,
    comments: [DUMMY_COMMENT_2, DUMMY_COMMENT_3],
  },
  {
    id: "card-4",
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    publishDate: "Објавено на: 28/05/24",
    imagePath: "./learn-page/assets/Rectangle 540 (4).png",
    category: POPULAR_CATEGORY,
    comments: [DUMMY_COMMENT_1, DUMMY_COMMENT_3],
  },
  {
    id: "card-5",
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    publishDate: "Објавено на: 28/05/24",
    imagePath: "./learn-page/assets/Rectangle 540.png",
    category: NEWEST_CATEGORY,
    comments: [DUMMY_COMMENT_1, DUMMY_COMMENT_2],
  },
  {
    id: "card-6",
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    publishDate: "Објавено на: 28/05/24",
    imagePath: "./learn-page/assets/Rectangle 540 (1).png",
    category: TRIVIA_CATEGORY,
    comments: [DUMMY_COMMENT_2, DUMMY_COMMENT_3],
  },
  {
    id: "card-7",
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    publishDate: "Објавено на: 28/05/24",
    imagePath: "./learn-page/assets/Rectangle 540 (5).png",
    category: POPULAR_CATEGORY,
    comments: [DUMMY_COMMENT_1, DUMMY_COMMENT_3],
  },
  {
    id: "card-8",
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    publishDate: "Објавено на: 28/05/24",
    imagePath: "./learn-page/assets/Rectangle 540 (1).png",
    category: TRIVIA_CATEGORY,
    comments: [DUMMY_COMMENT_2, DUMMY_COMMENT_3],
  },
];
