import {
  Controller,
  Get,
  Post,
  Body,
  Injectable,
  Optional,
  Inject,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
@Injectable()
export class CatsController<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient2: T;

  constructor(
    private catsService: CatsService,
    @Optional() @Inject('HTTP_OPTIONS') private httpClient: T,
  ) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
