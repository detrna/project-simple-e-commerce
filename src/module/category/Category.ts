export type Category = {
  id: string;
  name: string;
  subcategory: Subcategory[];
};

export type Subcategory = {
  id: string;
  name: string;
};
