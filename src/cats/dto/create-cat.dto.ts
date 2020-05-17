import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
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
