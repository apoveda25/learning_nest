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
} from '@nestjs/common';
import { Request } from 'express';

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
}
