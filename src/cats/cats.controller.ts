import { Controller, Get, Post, Req, HttpCode, Header } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
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
}
