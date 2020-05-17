import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { logger } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(logger)
    .forRoutes(CatsController);
  }
}