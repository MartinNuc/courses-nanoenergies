export interface Article {
  id: number;
  text: string;
  title: string;
  timestamp: Date;
  author: {
    name: string;
    email: string;
  };
}
