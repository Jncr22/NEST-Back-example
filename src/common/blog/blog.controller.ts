import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BlogService } from "../service/blog.service";
import { Blog } from "./blog.entity";


@Controller('blogs')
export class BlogController{


    constructor(private blogService:BlogService){}


    @Get(':id')
    getBlog(@Param() params){
        return this.blogService.getBlog(params.id);
    }

    @Post()
    createBlog(@Body() blog:Blog){
        return this.blogService.createBlog(blog);
    }

    @Put(':id')
    updateBlog(@Body() blog: Blog, @Param() params){
        return this.blogService.updateBlog(params.id, blog);
    }

    @Delete(':id')
    deleteUser(@Param() params){
        return this.blogService.deleteBlog(params.id);
    }
}