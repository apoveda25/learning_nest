import { Injectable } from '@nestjs/common';
import { Cat, CreateCat, CatFindAll } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCat) {
    const createCast = { id: 1, ...cat };
    this.cats.push(createCast);
  }

  findAll(query: CatFindAll): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat {
    return this.cats.find(cat => cat.id === id);
  }
}
