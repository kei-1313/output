export interface User {
  id: string;
  name: string;
  profile?: string;
  email?: string;
  emailVerified?: Date;
  hashedpassword?: string;
  image?: string;
  Accounts: Account[];
  Posts: Post[];
  Sessions: Session[];
  Likes: Like[];
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface VerificationToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
}

export interface PasswordResetToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
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
  PostFormatChallenges: PostFormatChallenge[];
  CategoryRelations: CategoryRelation[];
  Likes: Like[];
}

export interface PostFormatBase {
  id: string;
  postId: string;
  contents: string;
  Post: Post;
}

export interface PostFormatChallenge {
  id: string;
  postId: string;
  theme: string;
  contents: string;
  Post: Post;
}

export interface Category {
  id: string;
  label: string;
  name: string;
  icon?: string;
  CategoryRelations: CategoryRelation[];
}

export interface CategoryRelation {
  postId: string;
  categoryId: string;
  Post: Post;
  Category: Category;
}

export interface Like {
  id: string;
  postId: string;
  userId: string;
  Post: Post;
  User: User;
}
