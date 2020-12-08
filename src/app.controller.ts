import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { IHttpResponse } from '@app/common/interfaces/http.interface'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IHttpResponse {
    return { data: this.appService.getHello() }
  }
}
