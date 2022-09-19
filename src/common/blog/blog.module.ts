import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogService } from "../service/blog.service";
import { BlogController } from "./blog.controller";
import { Blog } from "./blog.entity";




@Module({
    imports:[TypeOrmModule.forFeature([Blog])],
    providers:[BlogService],
    controllers:[BlogController]
})
export class BlogMolude{}