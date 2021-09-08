export interface SubCategory {
  categoryId: number;
  id: number;
  isActive: boolean;
  name: string;
  order: number;
  slug: string;
  url: string;
}

export interface Category {
  id: number;
  isActive: boolean;
  name: string;
  order: number;
  slug: string;
  subCategories: SubCategory[];
  url: string;
}

export interface Prices {
  currency: string;
  currencySymbol: string;
  discount: number;
  price: number;
  realPrice: number;
}

export interface Course {
  categories: Category[];
  coverImage: string;
  description: string;
  duration: number;
  isActive: true;
  id: number;
  price: number;
  prices: Prices;
  sections: [
    {
      content: string;
      courseId: number;
      id: number;
      items: [
        {
          content: string;
          id: number;
          title: string;
        }
      ];
      title: string;
      type: string;
    }
  ];
  shortDescription: string;
  subtitle: string;
  title: string;
  trailer: string;
}
