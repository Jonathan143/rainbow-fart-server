import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateUserDTO, EditUserDTO } from './user.dto'
import { User } from './user.interface'
import { UserService } from './user.service'
import { IHttpResponseBase } from '@app/common/interfaces/http.interface'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /user/users
  @Get('users')
  async findAll(): Promise<IHttpResponseBase<User[]>> {
    return {
      data: await this.userService.findAll(),
      message: 'Success.',
    }
  }

  // GET /user/:_id
  @Get(':_id')
  async findOne(@Param('_id') _id: string): Promise<IHttpResponseBase<User>> {
    return {
      data: await this.userService.findOne(_id),
    }
  }

  // POST /user
  @Post()
  async addOne(@Body() body: CreateUserDTO): Promise<IHttpResponseBase> {
    await this.userService.addOne(body)
    return {
      message: 'Success.',
    }
  }

  // PUT /user/:_id
  @Put(':_id')
  async editOne(
    @Param('_id') _id: string,
    @Body() body: EditUserDTO,
  ): Promise<IHttpResponseBase> {
    await this.userService.editOne(_id, body)
    return {}
  }

  // DELETE /user/:_id
  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string): Promise<IHttpResponseBase> {
    await this.userService.deleteOne(_id)
    return {}
  }
}
