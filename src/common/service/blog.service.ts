import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Blog } from "../blog/blog.entity";


@Injectable()
export class BlogService{

    constructor(@InjectRepository(Blog) private blogRepository: Repository<Blog>) {
        
    }

    async getBlogs(blog:Blog): Promise<Blog[]>{
        return await this.blogRepository.find();
    }


    async getBlog(_id:number):Promise<Blog>{
        return this.blogRepository.findOne({where:{id:_id}})
    }


    async updateBlog(id:number,blog:Blog){
        return this.blogRepository.update({id},blog)
    }


    async createBlog(blog:Blog){
        return this.blogRepository.save(blog)
    }

    async deleteBlog(blog:Blog){
        return this.blogRepository.delete(blog)
    }


}
