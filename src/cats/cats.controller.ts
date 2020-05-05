import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  Header,
  Redirect,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { of, Observable } from 'rxjs';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  // @Get(':id')
  // findOne(@Param() params): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} cat`;
  // }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} cat`;
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('ab*cd')
  find() {
    return 'This route uses a wildcard';
  }

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get()
  async findAllAsync(): Promise<any[]> {
    return [];
  }

  @Get()
  findAllObservable(): Observable<any[]> {
    return of([]);
  }

  @Post()
  async createWithDTO(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
