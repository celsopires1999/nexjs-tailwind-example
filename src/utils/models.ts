export interface SearchOutput {
  items: Category[];
  current_page: number;
  page: number;
  per_page: number;
  total: number;
}

export interface Category {
  name: string;
  description: string;
  is_active: boolean;
  created_at: Date;
}
