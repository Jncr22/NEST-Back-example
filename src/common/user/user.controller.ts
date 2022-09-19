import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "../service/user.service";
import { User } from "./user.entity";


@Controller('users')
export class UserController {

    constructor(private service: UserService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put(':id')
    update(@Body() user: User, @Param() params) {
        return this.service.updateUser(params.id, user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUSer(params.id);
    }

}