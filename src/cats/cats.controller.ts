import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  UsePipes,
  Param,
  Query,
  ParseBoolPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from './http-exception.filter';
import { ValidationPipe } from './validation.pipe';
import { ParseIntPipe } from './parse-int.pipe';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@UseFilters(HttpExceptionFilter)
@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles('admin')
  @UsePipes(ValidationPipe)
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(
    @Query('activeOnly', ParseBoolPipe)
    activeOnly: boolean,
    @Query('page', ParseIntPipe)
    page: number,
  ) {
    return this.catsService.findAll({ activeOnly, page });
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id) {
    return this.catsService.findOne(id);
  }
}
