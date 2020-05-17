export interface CreateCat {
  name: string;
  age: number;
  breed: string;
}

export interface Cat {
  id: number;
  name: string;
  age: number;
  breed: string;
}

export interface CatFindAll {
  activeOnly: boolean;
  page: number;
}
