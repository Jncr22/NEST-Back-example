import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { User } from "../user/user.entity";

@Injectable()
export class UserService {


    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }

    async getUsers(user: User): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getUser(_id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id: _id } })
    }

    async getUsermail(_mail): Promise<User> {
        return this.userRepository.findOne({ where: { mail: _mail } })
    }

    async updateUser(id: number, user: User) {
        return this.userRepository.update({ id }, user)
    }

    async createUser(user: User) {
        return this.userRepository.save(user)
    }

    async deleteUSer(user: User) {
        return this.userRepository.delete(user);
    }

}