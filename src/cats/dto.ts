export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto {
  id: string;
  name: string;
  age: number;
  breed: string;
}

export class ListAllEntities {
  limit: number;
  offset: number;
  sort: string;
}
