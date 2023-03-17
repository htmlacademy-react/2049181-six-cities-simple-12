export type User ={
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Review = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: User;
};
