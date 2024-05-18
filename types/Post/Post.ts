export interface User {
  id: string;
  name: string;
  profile: string;
  email: string;
  emailVerified: Date | null;
  hashedpassword: string;
  image: string | null;
}

export interface PostFormatBase {
  id: string;
  postId: string;
  contents: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface CategoryRelation {
  postId: string;
  categoryId: string;
  Category: Category;
}

export interface Post {
  id: string;
  userId: string;
  title: string;
  thumbnail: string;
  created_at: Date;
  updated_at: Date;
  User: User;
  PostFormatBases: PostFormatBase[];
  CategoryRelations: CategoryRelation[];
  Likes: Like[];
}

export interface Like {
  id: string;
  userId: string;
  postId: string;
}
