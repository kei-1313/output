export interface Category {
  id: string;
  label: string;
  name: string;
  icon: string;
}

export interface CategoryRelation {
  postId: string;
  categoryId: string;
  Category: Category;
}

