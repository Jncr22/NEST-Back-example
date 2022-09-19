import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogMolude } from './common/blog/blog.module';
import { DatabaseModule } from './common/database/database.module';
import { UserModule } from './common/user/user.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    BlogMolude
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
