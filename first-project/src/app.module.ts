import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/esoft-nest-7s'),
    UsersModule,
    BooksModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'users/*', method: RequestMethod.GET });
  }
}
