import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/user/user.module'
import { WechatModule } from './modules/wechat/wechat.module'
import { BingModule } from './modules/bing/bing.module'
import { YiYanModule } from './modules/yiyan/yiyan.module'
import { ProjectModule } from './modules/project/project.module'

const DBModule = MongooseModule.forRoot('mongodb://localhost:27017/nest_demo')

@Module({
  imports: [
    DBModule,
    UserModule,
    WechatModule,
    BingModule,
    YiYanModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
