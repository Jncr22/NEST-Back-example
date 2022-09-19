import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Blog } from "../blog/blog.entity";
import { User } from "../user/user.entity";

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'my_nestjs_project',
        entities: [User,Blog],
        synchronize: true,
      }),
    ],
    exports: [TypeOrmModule]
  })
  export class DatabaseModule {}