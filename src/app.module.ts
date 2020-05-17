import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import * as helmet from 'helmet';
import * as cors from 'cors';
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
    consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
  }
}
