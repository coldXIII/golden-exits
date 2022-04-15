import { createStore } from 'vuex';

export default createStore({
  state: {
    menImages: [
      'man1',
      'man2',
      'man3',
      'man4',
      'man5',
      'man6',
      'man7',
      'man8',
      'man9',
      'man10',
      'man11',
      'man12',
    ],
    womenImages: [
      'woman1',
      'woman2',
      'woman3',
      'woman4',
      'woman5',
      'woman6',
      'woman7',
      'woman8',
      'woman9',
      'woman10',
      'woman11',
      'woman12',
    ],
    links: [
      {
        icon: 'fab fa-facebook',
        title: 'Home',
        url: '/',
      },
      {
        icon: 'fab fa-twitter',
        title: 'Men',
        url: '/men',
      },
      {
        icon: 'fab fa-telegram',
        title: 'Women',
        url: '/women',
      },
      {
        icon: 'fab fa-vimeo',
        title: 'Blog',
        url: '/blog',
      },
      {
        icon: 'fab fa-pinterest',
        title: 'Contact',
        url: '/contact',
      },
    ],
    posts: [
      {
        title: 'AENEAN SOLLICITUDIN AUCTOR',
        subtitle:
          'Posted by Admin Dev / Web Design / Comments: 116 / Views: 6,359',
        image: 'post-1',
        date: '20 ',
        month: 'January',
      },
      {
        title: 'MOBI ACCUMSAN IPSUMS AMETBELIT',
        subtitle:
          'Posted by Admin Dev / Uncategorized / Comments: 256 / Views: 8,214',
        image: 'post-2',
        date: '20 ',
        month: 'January',
      },
      {
        title: 'NAM NEC TELLUS ODIO INCUIT',
        subtitle:
          'Posted by Admin Dev / Uncategorized / Comments: 512 / Views: 10,588',
        image: 'post-3',
        date: '20 ',
        month: 'January',
      },
    ],
    tags: [
      'Fashion',
      'Man',
      'Woman',
      'Shoes',
      'Shirts',
      'Accesoires',
      'Jeans',
      'Clothes',
    ],
    values: [
      [
        { type: 'h3', content: 'man fashion' },
        {
          type: 'p',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hicperferendis id unde.',
        },
        { type: 'button', content: 'view more' },
      ],
      [
        { type: 'h3', content: 'woman fashion' },
        {
          type: 'p',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hicperferendis id unde.',
        },
        { type: 'button', content: 'view more' },
      ],
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
