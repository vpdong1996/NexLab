export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostDto {
  userId: number;
  title: string;
  body: string;
}

export interface PostUpdateDto {
  title?: string;
  body?: string;
  userId: number;
  id: number;
}
