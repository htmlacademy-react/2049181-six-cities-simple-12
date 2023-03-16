import { Comment } from '../types/comment';

export const comments: Comment[] = [
  {
    id: 1,
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/6.jpg'
    },
    rating: 2,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: new Date('2023-02-19T07:31:24.880Z')
  },
  {
    id: 2,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/9.jpg'
    },
    rating: 3,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: new Date('2023-02-22T07:31:24.881Z')
  },
  {
    id: 3,
    user: {
      id: 11,
      isPro: false,
      name: 'Jack',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/2.jpg'
    },
    rating: 4,
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: new Date('2023-02-22T07:31:24.881Z')
  }
];
