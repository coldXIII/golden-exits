import { createStore } from 'vuex';

export default createStore({
  state: {
    menImages: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    womenImages: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
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
    tabs: ['shoes', 'shirts', 'jeans', 'accesoires'],
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
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
