type PostType = {
  Images: string[] | null;
  author: string;
  date: string;
  description: string;
  location: string | null;
  password: string;
  views: number;
  likes: number;
  comments: string[] | null;
};

export type { PostType };
